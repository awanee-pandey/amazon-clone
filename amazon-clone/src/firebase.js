import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlWmv_nGJ552bFAi6_xIA728RX7-hGPDo",
    authDomain: "awanee-challenges.firebaseapp.com",
    databaseURL: "https://awanee-challenges.firebaseio.com",
    projectId: "awanee-challenges",
    storageBucket: "awanee-challenges.appspot.com",
    messagingSenderId: "117164140925",
    appId: "1:117164140925:web:a9486ced5cd42f2f9a8414",
    measurementId: "G-74RZ9STNLZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
