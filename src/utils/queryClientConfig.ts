export const queryClientConfig = {
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 10,
            gcTime: 1000 * 60 * 30,
            retry: 3,
            refetchOnWindowFocus: true,
        },
    },
}