import SparklesIcon from '../../../../../../../lib/icons/SparklesIcon.tsx';
import styles from './FavouriteBtn.module.scss';
import classNames from 'classnames';
import { useFavouriteStore } from '../../../../../../../api/store/FavouritesStore.ts';
import { SpaceShipModel } from '../../../../../../../api/models/SpaceShipsModels.ts';
import { FC } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../../../../../../../api/store/AuthStore.ts';

interface FavouriteBtnProps {
    data: SpaceShipModel;
}

const FavouriteBtn: FC<FavouriteBtnProps> = ({ data }) => {
    const { user } = useAuthStore();
    const { addFavourite, removeFavourite, isFavourite } = useFavouriteStore(state => ({
        addFavourite: state.addFavourite,
        removeFavourite: state.removeFavourite,
        isFavourite: (rocketId: string) => state.isFavourite(rocketId),
    }));
    const queryClient = useQueryClient();

    const handleFavouriteClick = () => {
        if (isFavourite(data.id)) {
            removeFavourite(data.id);
        } else {
            addFavourite(data);
        }
        queryClient.invalidateQueries({ queryKey: ['get-user', user?.uid] });
    };

    return (
        <button
            onClick={handleFavouriteClick}
            className={classNames(styles.favourites, {
                [styles.check]: isFavourite(data.id),
                [styles.noCheck]: !isFavourite(data.id),
            })}
        >
            <SparklesIcon className={styles.icon} />
            {isFavourite(data.id) ? 'Remove from favorites' : 'Add to favorites'}
        </button>
    );
};

export default FavouriteBtn;
