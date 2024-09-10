import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDxFyx4k42emmXZqOXpf0rO3agfdFa_hWU",
    authDomain: "project-77ee1.firebaseapp.com",
    projectId: "project-77ee1",
    storageBucket: "project-77ee1.appspot.com",
    messagingSenderId: "39513338366",
    appId: "1:39513338366:web:84be6269da620f91d9d0af"
  }

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()
  const db = firebase.firestore()
  
  export { storage, db }