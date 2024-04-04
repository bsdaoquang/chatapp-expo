/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBOWF2J1sK6A1gHX8-QMRWP2DNJ2UxyPNY',
	authDomain: 'chatapp-f01ee.firebaseapp.com',
	projectId: 'chatapp-f01ee',
	storageBucket: 'chatapp-f01ee.appspot.com',
	messagingSenderId: '1014163921671',
	appId: '1:1014163921671:web:cf39d96c2fc44794cd83a2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const fs = getFirestore();

export { auth, fs };
