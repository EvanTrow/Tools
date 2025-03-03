import React, { useState } from 'react';
import { Grid2, Container, FormControl, Select, MenuItem, Box, Typography, SelectChangeEvent, Divider, InputBase, Paper, useMediaQuery, useTheme } from '@mui/material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../../Router';

const units = [
	'Bit',
	'Kilobit',
	'Kibibit',
	'Megabit',
	'Mebibit',
	'Gigabit',
	'Gibibit',
	'Terabit',
	'Tebibit',
	'Petabit',
	'Pebibit',
	'Byte',
	'Kilobyte',
	'Kibibyte',
	'Megabyte',
	'Mebibyte',
	'Gigabyte',
	'Gibibyte',
	'Terabyte',
	'Tebibyte',
	'Petabyte',
	'Pebibyte',
];

const conversionRates: { [key: string]: number } = {
	Bit: 1,
	Kilobit: 1e3,
	Kibibit: 1024,
	Megabit: 1e6,
	Mebibit: 1048576,
	Gigabit: 1e9,
	Gibibit: 1073741824,
	Terabit: 1e12,
	Tebibit: 1099511627776,
	Petabit: 1e15,
	Pebibit: 1125899906842624,
	Byte: 8,
	Kilobyte: 8e3,
	Kibibyte: 8192,
	Megabyte: 8e6,
	Mebibyte: 8388608,
	Gigabyte: 8e9,
	Gibibyte: 8589934592,
	Terabyte: 8e12,
	Tebibyte: 8796093022208,
	Petabyte: 8e15,
	Pebibyte: 9007199254740992,
};

function FileSize({ tool }: { tool: Tool }) {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down('md'));

	const [fromValue, setFromValue] = useState('1');
	const [fromUnit, setFromUnit] = useState('Gigabyte');
	const [toValue, setToValue] = useState('1000');
	const [toUnit, setToUnit] = useState('Megabyte');

	const safeValue = (value: string | number) =>
		value
			.toString()
			.replace(/[^0-9.]/g, '')
			.replace(/(\..*?)\..*/g, '$1');

	const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = safeValue(e.target.value);
		setFromValue(value);
		setToValue(convert(value, fromUnit, toUnit));
	};

	const handleToValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = safeValue(e.target.value);
		setToValue(value);
		setFromValue(convert(value, toUnit, fromUnit));
	};

	const handleFromUnitChange = (e: SelectChangeEvent<string>) => {
		const value = safeValue(e.target.value);
		setFromUnit(value);
		setToValue(convert(fromValue, value, toUnit));
	};

	const handleToUnitChange = (e: SelectChangeEvent<string>) => {
		const value = safeValue(e.target.value);
		setToUnit(value);
		setToValue(convert(fromValue, fromUnit, value));
	};

	const convert = (value: string | number, from: string, to: string): string => {
		value = parseFloat(value.toString());

		const fromRate = conversionRates[from];
		const toRate = conversionRates[to];
		return ((value * fromRate) / toRate).toString();
	};

	return (
		<Container maxWidth='md' sx={{ mt: 2 }}>
			<ToolTitle tool={tool} />
			<Box sx={{ mt: 2 }} />
			<Grid2 container spacing={2} alignItems='center'>
				<Grid2 size={!isMd ? 'grow' : 12}>
					<Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
						<InputBase sx={{ ml: 1, flex: 1 }} fullWidth placeholder='From Value' inputProps={{ 'aria-label': 'From Value' }} value={fromValue} onChange={handleFromValueChange} />
						<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
						<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
							<Select value={fromUnit} onChange={handleFromUnitChange}>
								{units.map((unit) => (
									<MenuItem key={unit} value={unit}>
										{unit}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Paper>
				</Grid2>
				<Grid2 size='auto' textAlign='center' sx={{ display: { xs: 'none', md: 'block' } }}>
					<Typography variant='h6'>=</Typography>
				</Grid2>
				<Grid2 size={!isMd ? 'grow' : 12}>
					<Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
						<InputBase sx={{ ml: 1, flex: 1 }} fullWidth placeholder='To Value' inputProps={{ 'aria-label': 'To Value' }} value={toValue} onChange={handleToValueChange} />
						<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
						<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
							<Select value={toUnit} onChange={handleToUnitChange}>
								{units.map((unit) => (
									<MenuItem key={unit} value={unit}>
										{unit}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Paper>
				</Grid2>
			</Grid2>
		</Container>
	);
}

export default FileSize;
