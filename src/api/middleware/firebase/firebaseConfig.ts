import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyD45Ehk83xhWIM1lc3NVt5tPY6uiVSAz5s',
    authDomain: 'space-rockets-e2c70.firebaseapp.com',
    projectId: 'space-rockets-e2c70',
    storageBucket: 'space-rockets-e2c70.appspot.com',
    messagingSenderId: '408230426450',
    appId: '1:408230426450:web:2cd92094376c84170aec8b',
    measurementId: 'G-GB65RRMER6',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
