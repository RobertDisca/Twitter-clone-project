import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBxRKJmJI5L6bDS9jO30xPW03zekg5vHZo',
    authDomain: 'twitter-clone-6c611.firebaseapp.com',
    projectId: 'twitter-clone-6c611',
    storageBucket: 'twitter-clone-6c611.appspot.com',
    messagingSenderId: '331941736388',
    appId: '1:331941736388:web:ef406aa26a9be62ec17e91',
    measurementId: 'G-TCH81Y6GVT',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
