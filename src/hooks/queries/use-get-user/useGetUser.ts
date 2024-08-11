import { useQuery } from '@tanstack/react-query';
import { useUserStore } from '../../../api/store/UserStore.ts';

export const useGetUser = (uid: string | null) => {
    const { getUserById } = useUserStore();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['get-user', uid],
        queryFn: () => getUserById(uid as string),
        staleTime: 1000 * 60 * 5,
        enabled: !!uid,
    });

    return {
        data,
        isLoading,
        isError,
        error,
    };
};
