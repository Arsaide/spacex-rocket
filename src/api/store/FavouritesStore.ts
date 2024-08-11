import { create } from 'zustand';
import { auth, db } from '../middleware/firebase/firebaseConfig.ts';
import { collection, doc, updateDoc, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';
import { SpaceShipModel } from '../models/SpaceShipsModels.ts';

interface FavouritesStoreState {
    favourites: SpaceShipModel[];
    addFavourite: (rocket: SpaceShipModel) => Promise<void>;
    removeFavourite: (rocketId: string) => Promise<void>;
    isFavourite: (rocketId: string) => boolean;
    exportFavourites: () => Promise<void>;
}

export const useFavouriteStore = create<FavouritesStoreState>((set, get) => ({
    favourites: [],
    addFavourite: async (rocket: SpaceShipModel) => {
        const user = auth.currentUser;
        if (user) {
            const userFavoritesRef = doc(collection(db, 'users'), user.uid);
            await updateDoc(userFavoritesRef, {
                favourites: arrayUnion(rocket),
            });
            set(state => ({
                favourites: [...state.favourites, rocket],
            }));
        }
    },

    removeFavourite: async (rocketId: string) => {
        const user = auth.currentUser;
        if (user) {
            const userFavoritesRef = doc(collection(db, 'users'), user.uid);
            const rocketToRemove = get().favourites.find(rocket => rocket.id === rocketId);
            if (rocketToRemove) {
                await updateDoc(userFavoritesRef, {
                    favourites: arrayRemove(rocketToRemove),
                });
                set(state => ({
                    favourites: state.favourites.filter(rocket => rocket.id !== rocketId),
                }));
            }
        }
    },

    isFavourite: (rocketId: string) => {
        return get().favourites.some(rocket => rocket.id === rocketId);
    },

    exportFavourites: async () => {
        const user = auth.currentUser;
        if (user) {
            const userFavoritesRef = doc(collection(db, 'users'), user.uid);
            const docSnap = await getDoc(userFavoritesRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                set({ favourites: userData.favourites || [] });
            }
        }
    },
}));

onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
        await (useFavouriteStore.getState() as FavouritesStoreState).exportFavourites();
    }
});
