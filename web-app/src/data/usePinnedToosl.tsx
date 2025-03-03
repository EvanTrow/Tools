import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

const PINNED_TOOLS_CACHE_KEY = 'pinned_tools';
export const PINNED_TOOLS_QUERY_KEY = [PINNED_TOOLS_CACHE_KEY];

export const useGetPinnedTools = () => {
	return useQuery({
		queryKey: PINNED_TOOLS_QUERY_KEY,
		queryFn: async (): Promise<string[]> => {
			const pinnedTools = localStorage.getItem(PINNED_TOOLS_CACHE_KEY);
			return pinnedTools ? JSON.parse(pinnedTools) : [];
		},
	});
};

export const useSetPinnedTools = () => {
	const queryClient = useQueryClient();
	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationFn: async (pinned: string[]) => {
			localStorage.setItem(PINNED_TOOLS_CACHE_KEY, JSON.stringify(pinned));
			return pinned;
		},
		onError: (error: any, varables) => {
			console.error(error);
			enqueueSnackbar('Error updating pinned tools.', { variant: 'error' });
		},
		onSuccess: (data) => {
			queryClient.setQueryData(PINNED_TOOLS_QUERY_KEY, () => data as string[]);
		},
	});
};
