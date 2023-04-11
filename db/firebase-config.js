// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCt-2jCUXfjS4h2sosQLr6RhAIVBCJ7yDY',
	authDomain: 'bigsneakers-bc413.firebaseapp.com',
	projectId: 'bigsneakers-bc413',
	storageBucket: 'bigsneakers-bc413.appspot.com',
	messagingSenderId: '66455259729',
	appId: '1:66455259729:web:e131bef2d73bb81fdd8670',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
