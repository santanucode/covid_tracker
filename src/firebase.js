import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjtt0vki2UB9qKYquIY-u5sjKR-2QpgHg",
  authDomain: "covid-19-tracker-78b67.firebaseapp.com",
  databaseURL: "https://covid-19-tracker-78b67.firebaseio.com",
  projectId: "covid-19-tracker-78b67",
  storageBucket: "covid-19-tracker-78b67.appspot.com",
  messagingSenderId: "637997943638",
  appId: "1:637997943638:web:86465fe1a7c2fe5cbda4f7",
  measurementId: "G-WSFH6V0Q68"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;