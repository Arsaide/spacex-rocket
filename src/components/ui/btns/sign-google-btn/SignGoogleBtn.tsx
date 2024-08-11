import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../../../api/middleware/firebase/firebaseConfig.ts';
import styles from '../Btn.module.scss';
import { FC } from 'react';
import { setTextColorWithScroll } from '../../../../utils/styles-func/setTextColorWithScroll.ts';
import { linkColor } from '../index.ts';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthStore } from '../../../../api/store/AuthStore.ts';

interface SignInWithGoogleBtnProps {
    scrollPos: number;
}

const SignInWithGoogleBtn: FC<SignInWithGoogleBtnProps> = ({ scrollPos }) => {
    const { login } = useAuthStore();

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async result => {
                const user = result.user;

                const userRef = doc(db, 'users', user.uid);
                await setDoc(userRef, {
                    name: user.displayName,
                    email: user.email,
                    picture: user.photoURL,
                });

                login({
                    name: user.displayName || '',
                    email: user.email || '',
                    picture: user.photoURL || '',
                });
            })
            .catch(error => {
                console.error('Auth error:', error);
            });
    };

    return (
        <button
            className={styles.btn}
            onClick={handleGoogleSignIn}
            style={{
                color: setTextColorWithScroll(scrollPos, 300),
                border: `1px solid ${linkColor(scrollPos)}`,
            }}
        >
            Log in
        </button>
    );
};

export default SignInWithGoogleBtn;
