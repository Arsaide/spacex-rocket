import { useQuery } from '@tanstack/react-query';
import useSpaceShipsStore from '../../../api/store/SpaceShipsStore.ts';

export const useGetAllRockets = () => {
    const {getAllSpaceShips} = useSpaceShipsStore();

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['get-all-rockets'],
        queryFn: () => getAllSpaceShips(),
        select: data => data.data,
        staleTime: 1000 * 60 * 5,
    })

    return {data, isLoading, isError, error}
}