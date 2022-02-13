import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD26YdE6OtwP2YnUDN6APcixc-l1Hq0Xx4',
  authDomain: 'where-s-waldo-795e0.firebaseapp.com',
  projectId: 'where-s-waldo-795e0',
  storageBucket: 'where-s-waldo-795e0.appspot.com',
  messagingSenderId: '399412480334',
  appId: '1:399412480334:web:65e8ffffa3150b3024761f',
};

initializeApp(firebaseConfig);

const db = getFirestore();

const storage = getStorage();

export { storage, db };
