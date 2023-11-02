
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKcrq-ULpt9GD9-uTxz4wODxtdlMwbS9E",
  authDomain: "mp2game-bbf98.firebaseapp.com",
  projectId: "mp2game-bbf98",
  storageBucket: "mp2game-bbf98.appspot.com",
  messagingSenderId: "829057817367",
  appId: "1:829057817367:web:6e5366c226c98b7ba2f552"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };
