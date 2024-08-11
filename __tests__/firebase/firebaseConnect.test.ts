import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../src/api/middleware/firebase/firebaseConfig.ts';

describe('Firebase init', () => {
    let app: ReturnType<typeof initializeApp>;
    let auth: ReturnType<typeof getAuth>;
    let db: ReturnType<typeof getFirestore>;

    beforeAll(() => {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
    });

    it('should init firebase app', () => {
        expect(app).toBeDefined();
    });

    it('should init firebase auth', () => {
        expect(auth).toBeDefined();
    });

    it('should init firebase firestore', () => {
        expect(db).toBeDefined();
    });
});
