import { AxiosResponse } from 'axios';
import $api from '../request';
import { SpaceShipModel } from '../models/SpaceShipsModels.ts';

export default class SpaceShipsService {
    static async getAllSpaceShips(): Promise<AxiosResponse<SpaceShipModel[]>> {
        return $api.get<SpaceShipModel[]>(`/v4/rockets`);
    }

    static async getOneSpaceShip(id: string): Promise<AxiosResponse<SpaceShipModel>> {
        return $api.get<SpaceShipModel>(`/v4/rockets/${id}`);
    }
}
