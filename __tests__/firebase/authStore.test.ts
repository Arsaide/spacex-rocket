import { useAuthStore } from '../../src/api/store/AuthStore.ts';

describe('Auth store', () => {
    beforeEach(() => {
        useAuthStore.getState().logout();
    });

    it('should init with default values', () => {
        const state = useAuthStore.getState();
        expect(state.isAuthenticated).toBe(false);
        expect(state.user).toBe(null);
    });

    it('should set isAuth to true and set user on login', () => {
        const user = {
            name: 'Kirill Testovich',
            email: 'testkirill@test.com',
            picture: 'https://test.com',
        };
        useAuthStore.getState().login(user);

        const state = useAuthStore.getState();
        expect(state.isAuthenticated).toBe(true);
        expect(state.user).toEqual(user);
    });

    it('should reset isAuth to false and user logout', () => {
        const user = {
            name: 'Kirill Testovich',
            email: 'testkirill@test.com',
            picture: 'https://test.com',
        };
        useAuthStore.getState().login(user);
        useAuthStore.getState().logout();

        const state = useAuthStore.getState();
        expect(state.isAuthenticated).toBe(false);
        expect(state.user).toBe(null);
    });
});
