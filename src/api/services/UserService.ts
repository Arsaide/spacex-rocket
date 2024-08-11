import { UserModel } from '../models/UserModels.ts';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../middleware/firebase/firebaseConfig.ts';

export default class UserService {
    static async getUserById(uid: string): Promise<UserModel> {
        const userData = doc(db, 'users', uid);
        const userDoc = await getDoc(userData);
        if (!userDoc.exists) {
            throw new Error('User not found!');
        }

        return userDoc.data() as UserModel;
    }
}
