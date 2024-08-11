import { create } from 'zustand';

interface BurgerMenuState {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

export const useBurgerMenuStore = create<BurgerMenuState>(set => ({
    isOpen: false,
    toggle: () => set(state => ({ isOpen: !state.isOpen })),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
