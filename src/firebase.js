import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCrEzBffu6fJ1sTdaQZba-IfyXXit9xWXw",
  authDomain: "netflixclone-fafbe.firebaseapp.com",
  projectId: "netflixclone-fafbe",
  storageBucket: "netflixclone-fafbe.firebasestorage.app",
  messagingSenderId: "703707038884",
  appId: "1:703707038884:web:212a431c9092663df89231",
  measurementId: "G-Y6PRHPHSV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    
    // Add user details to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log("User signed up successfully!");
  } catch (error) {
    console.error("Sign-up error:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));
}
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully!");
  } catch (error) {
    console.error("Login error:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));

  }
};

const logout = async () => {
  try {
    await signOut(auth)
    console.log("User logged out successfully!");
  } catch (error) {
    console.error("Logout error:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

export {auth,db,login,signUp,logout}