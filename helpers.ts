import moment from 'moment';
import { SystemLog } from './web-app/src/types/Types';

export const recentLogs: SystemLog[] = [];
const maxLogs = 1500;

const addLog = (prefix: string, type: string, ...args: any[]) => {
	recentLogs.push({ timestamp: moment().valueOf(), module: prefix, type, args });
	if (recentLogs.length > maxLogs) {
		recentLogs.shift();
	}
};

export function createLogger(prefix: string) {
	return {
		log: (...args: any[]) => {
			console.log(`[${prefix}]`, ...args);
			addLog(prefix, 'LOG', ...args);
		},
		error: (...args: any[]) => {
			console.error(`[${prefix}]`, ...args);
			addLog(prefix, 'ERROR', ...args);
		},
		warn: (...args: any[]) => {
			console.warn(`[${prefix}]`, ...args);
			addLog(prefix, 'WARN', ...args);
		},
		info: (...args: any[]) => {
			console.info(`[${prefix}]`, ...args);
			addLog(prefix, 'INFO', ...args);
		},
	};
}

export function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function splitFullName(fullName: string): { firstName: string; lastName: string } {
	// Trim any extra spaces and split the full name by spaces

	if (!fullName) return { firstName: 'Unknown', lastName: '' };

	const nameParts = fullName.trim().split(/\s+/);

	// If there is only one part, assume it's the first name, and the last name is empty
	if (nameParts.length === 1) {
		return { firstName: nameParts[0], lastName: '' };
	}

	// Return the first name as the first part and the rest as the last name
	return {
		firstName: nameParts?.[0] ?? null,
		lastName: nameParts?.slice(1)?.join(' ') ?? null, // Join the remaining parts as the last name
	};
}
