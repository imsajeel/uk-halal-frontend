import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCFk6ILOcHy779Mk5hnRkH3Za3srDyYxWU",
  authDomain: "uk-halal.firebaseapp.com",
  projectId: "uk-halal",
  storageBucket: "uk-halal.appspot.com",
  messagingSenderId: "456549976589",
  appId: "1:456549976589:web:78087836c8b30d14982344",
};
firebase.initializeApp(config);
export default firebase.firestore();
