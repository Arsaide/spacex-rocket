import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStoreState {
    isAuthenticated: boolean;
    user: {
        name: string | null;
        email: string | null;
        picture: string | null;
    } | null;
    login: (user: { name: string; email: string; picture: string }) => void;
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
