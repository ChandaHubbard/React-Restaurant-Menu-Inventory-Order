import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBK9NEpfNdpL85YRbiK9JrferW4HinBaFc",
  authDomain: "catch-of-the-day-chanda.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-chanda-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

// this is a default export
export default base;
