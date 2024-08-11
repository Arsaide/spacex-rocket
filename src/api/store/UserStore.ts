import { create } from 'zustand';
import { UserModel } from '../models/UserModels.ts';
import UserService from '../services/UserService.ts';

interface useUserStoreState {
    getUserById: (uid: string) => Promise<UserModel>;
}

export const useUserStore = create<useUserStoreState>(() => ({
    getUserById: async (uid: string) => {
        try {
            return UserService.getUserById(uid);
        } catch (error) {
            throw error instanceof Error;
        }
    },
}));
