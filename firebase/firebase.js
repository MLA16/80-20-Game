
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	signInAnonymously,
	onAuthStateChanged,
	connectAuthEmulator,
} from 'firebase/auth';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAPuXVt4ompu89nlqlglGE9UQ9CHCNVGjI",
  authDomain: "db-c4737.firebaseapp.com",
  databaseURL: "https://db-c4737-default-rtdb.firebaseio.com",
  projectId: "db-c4737",
  storageBucket: "db-c4737.appspot.com",
  messagingSenderId: "703577964013",
  appId: "1:703577964013:web:dd53c1837fa59b2b19fbe4",
  measurementId: "G-Y9P8HGCFYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export { signInAnonymously, onAuthStateChanged };