import { SvgIconProps } from '@mui/material';

const context = require.context('./', true, /\.tsx$/);

const AllTools: ToolSection[] = [];

export type ToolSection = {
	title: string;
	tools: Tool[];
};
export type Tool = {
	title: string;
	pageTitle: string;
	description: string;
	path: string;
	page: React.ComponentType;
	icon: React.ReactElement<SvgIconProps>;
};

context.keys().forEach((key) => {
	if (key === './AllTools.tsx') return;
	const module = context(key);
	if (module.default) {
		const sectionName = key.split('/')[1];
		const section = AllTools.find((section) => section.title === sectionName);
		if (section) {
			section.tools.push(module.default);
		} else {
			AllTools.push({
				title: sectionName,
				tools: [module.default],
			});
		}
	}
});

// Sort the AllTools array by section title
AllTools.sort((a, b) => a.title.localeCompare(b.title));

// Sort the tools within each section by tool title
AllTools.forEach((section) => {
	section.tools.sort((a, b) => a.title.localeCompare(b.title));
});

export default AllTools;
