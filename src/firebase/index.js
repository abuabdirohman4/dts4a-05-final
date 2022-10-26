import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLV0EVeNEOyFFzotzmpP_DL7GOsihU9Vs",
  authDomain: "dts2022-fbabe.firebaseapp.com",
  projectId: "dts2022-fbabe",
  storageBucket: "dts2022-fbabe.appspot.com",
  messagingSenderId: "48537766947",
  appId: "1:48537766947:web:09fac1f5bfad1b51b1f596",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (err) {
    console.log("CODE", err.code);
    console.log("MESSAGE", err.message);
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (err) {
    console.log("CODE", err.code);
    console.log("MESSAGE", err.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log("CODE", err.code);
    console.log("MESSAGE", err.message);
  }
};

export { auth, register, login, logout };
