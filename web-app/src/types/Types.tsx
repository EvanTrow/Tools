export interface Extension {
	packages: string[];
	webPackages: string[];
}

export type SystemLog = {
	timestamp: number;
	module: string;
	type: string;
	args: any[];
};
