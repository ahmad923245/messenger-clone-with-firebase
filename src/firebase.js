import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArRw6YvcKY4kjCuClpRXaC-eiWeFn0FGo",
    authDomain: "messenger-clone-4fe18.firebaseapp.com",
    databaseURL: "https://messenger-clone-4fe18.firebaseio.com",
    projectId: "messenger-clone-4fe18",
    storageBucket: "messenger-clone-4fe18.appspot.com",
    messagingSenderId: "147682368856",
    appId: "1:147682368856:web:2f351b06559c4feee4d92d",
    measurementId: "G-V5XKNWLFZT"
  });
  const db  = firebaseApp.firestore()

  export  default db;