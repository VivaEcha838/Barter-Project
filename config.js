import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB8K4BhK_1JmvhuUhS7DT8c0HxIt7FV1Bs",
    authDomain: "barter-app-43873.firebaseapp.com",
    projectId: "barter-app-43873",
    storageBucket: "barter-app-43873.appspot.com",
    messagingSenderId: "583853069952",
    appId: "1:583853069952:web:ada94c3657c0b81f257865"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()