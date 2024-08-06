import { create } from 'zustand';
import { AxiosResponse } from 'axios';
import { SpaceShipModel } from '../models/SpaceShipsModels.ts';
import SpaceShipsService from '../services/SpaceShipsService.ts';

interface SpaceShipsStoreTypes {
    getAllSpaceShips: () => Promise<AxiosResponse<SpaceShipModel[]>>;
    getOneSpaceShip: (id: string) => Promise<AxiosResponse<SpaceShipModel>>;
}

const useSpaceShipsStore = create<SpaceShipsStoreTypes>(() => ({
    getAllSpaceShips: async () => {
        try {
            return await SpaceShipsService.getAllSpaceShips();
        } catch (error) {
            throw error instanceof Error;
        }
    },

    getOneSpaceShip: async (id: string) => {
        try {
            return await SpaceShipsService.getOneSpaceShip(id);
        } catch (error) {
            throw error instanceof Error;
        }
    },
}));

export default useSpaceShipsStore;
