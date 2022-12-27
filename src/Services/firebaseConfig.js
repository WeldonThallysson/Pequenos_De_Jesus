import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqzIVbnMUt0E5nywyO6MSs7a18w0xhm60",
    authDomain: "pequeninosdejesus-f5e10.firebaseapp.com",
    projectId: "pequeninosdejesus-f5e10",
    storageBucket: "pequeninosdejesus-f5e10.appspot.com",
    messagingSenderId: "150462662977",
    appId: "1:150462662977:web:a404f480e7e19c1b6bb9c0",
    measurementId: "G-D50X1B3FMV"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  export {db}