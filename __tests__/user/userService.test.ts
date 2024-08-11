import { UserModel } from '../../src/api/models/UserModels.ts';
import UserService from '../../src/api/services/UserService.ts';
import { useUserStore } from '../../src/api/store/UserStore.ts';

jest.mock('../../src/api/services/UserService.ts', () => ({
    __esModule: true,
    default: {
        getUserById: jest.fn(),
    },
}));

describe('useUseStore', () => {
    const mockUser: UserModel = {
        name: 'Kirill Testovich',
        email: 'testkirill@test.com',
        picture: 'https://test.com',
        uid: 'fsdlfjlkrrwelmsldfsdf',
        favourites: [],
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return user by ID', async () => {
        (UserService.getUserById as jest.Mock).mockResolvedValue(mockUser);

        const store = useUserStore.getState();
        const user = await store.getUserById('fsdlfjlkrrwelmsldfsdf');

        expect(user).toEqual(mockUser);
        expect(UserService.getUserById).toHaveBeenCalledWith('fsdlfjlkrrwelmsldfsdf');
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should throw error if getUserById - fails', async () => {
        const error = new Error('Failed to get user by ID');
        (UserService.getUserById as jest.Mock).mockRejectedValue(error);

        const store = useUserStore.getState();

        await expect(store.getUserById('fsdlfjlkrrwelmsldfsdf')).rejects.toThrow(error);
        expect(UserService.getUserById).toHaveBeenCalledWith('fsdlfjlkrrwelmsldfsdf');
    });
});
