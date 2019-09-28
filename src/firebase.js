import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCT7VR4vzeA9PneaRWk5C_WfVevZa_jJmw",
  authDomain: "comentaki-app-1e75d.firebaseapp.com",
  databaseURL: "https://comentaki-app-1e75d.firebaseio.com",
  projectId: "comentaki-app-1e75d",
  storageBucket: "",
  messagingSenderId: "808800975032",
  appId: "1:808800975032:web:a1571851795e1313791c4d"
}

firebase.initializeApp(firebaseConfig)

export default firebase