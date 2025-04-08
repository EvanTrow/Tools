import React, { useEffect, useState } from 'react';
import { Typography, Box, Checkbox, FormControlLabel, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const DownloadDisclaimer = () => {
	const [agreed, setAgreed] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const agreed = localStorage.getItem('download_disclaimer_agreed');
		if (agreed !== 'true') {
			setOpen(true);
		}
	}, []);

	const handleAgree = () => {
		if (agreed) {
			setOpen(false);
			localStorage.setItem('download_disclaimer_agreed', 'true');
		}
	};

	return (
		<Dialog open={open} maxWidth='sm' fullWidth fullScreen={window.innerWidth <= 600}>
			<DialogTitle>Download Agreement</DialogTitle>
			<DialogContent>
				<Box mb={2}>
					<Typography variant='subtitle1' component='div' fontWeight='bold'>
						Copyright & Intellectual Property
					</Typography>
					<Typography variant='body2'>
						This website is provided for informational and personal-use purposes only. We do not host or store any audio or video content on our servers. By using our service, you
						acknowledge that you have the legal right or permission to download and access the content in question. All copyright and trademark rights remain the property of their
						respective owners.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography variant='subtitle1' component='div' fontWeight='bold'>
						User Responsibility
					</Typography>
					<Typography variant='body2'>
						You are solely responsible for your use of this website and any resulting actions, including the download or use of any files. We strongly encourage users to respect
						intellectual property laws and obtain permission from rights holders before downloading any content.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography variant='subtitle1' component='div' fontWeight='bold'>
						No Endorsement or Liability
					</Typography>
					<Typography variant='body2'>
						This website does not endorse or encourage the downloading of copyrighted materials in violation of applicable laws. We disclaim all liability for any damages or legal
						consequences resulting from unauthorized or illegal use of the service. Any links or references to third-party services are provided solely for convenience and do not imply
						endorsement.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography variant='subtitle1' component='div' fontWeight='bold'>
						Changes to This Disclaimer
					</Typography>
					<Typography variant='body2'>
						We reserve the right to update or modify this disclaimer at any time without prior notice. Your continued use of the service after any changes indicates your acceptance of the
						updated disclaimer.
					</Typography>
				</Box>

				<FormControlLabel control={<Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />} label='I have read and agree to the terms and conditions' />
			</DialogContent>
			<DialogActions>
				<Button variant='contained' color='primary' fullWidth onClick={handleAgree} disabled={!agreed}>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DownloadDisclaimer;
