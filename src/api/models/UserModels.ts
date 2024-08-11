import { SpaceShipModel } from './SpaceShipsModels.ts';

export interface UserModel {
    name: string;
    email: string;
    picture: string;
    uid: string;
    favourites?: SpaceShipModel[];
}
