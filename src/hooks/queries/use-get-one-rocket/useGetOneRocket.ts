import { useQuery } from '@tanstack/react-query';
import useSpaceShipsStore from '../../../api/store/SpaceShipsStore.ts';

export const useGetOneRocket = (id: string | null) => {
    const { getOneSpaceShip } = useSpaceShipsStore();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['get-rocket', id],
        queryFn: () => getOneSpaceShip(id as string),
        select: data => data.data,
        staleTime: 1000 * 60 * 5,
        enabled: !!id,
    });

    return { data, isLoading, isError, error };
};
