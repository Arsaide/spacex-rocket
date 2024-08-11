import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserModel } from '../models/UserModels.ts';

interface AuthStoreState {
    isAuthenticated: boolean;
    user: UserModel | null;
    login: (user: UserModel) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStoreState>()(
    persist(
        set => ({
            isAuthenticated: false,
            user: null,
            login: user =>
                set({
                    isAuthenticated: true,
                    user,
                }),
            logout: () =>
                set({
                    isAuthenticated: false,
                    user: null,
                }),
        }),
        {
            name: 'auth',
        },
    ),
);
