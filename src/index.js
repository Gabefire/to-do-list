import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, getFirestore, doc, setDoc } from "firebase/firestore";

import generateContainer from "./modules/localStorage";

import mainPage from "./modules/main";

import "./style.css";
import Container from "./modules/container";

// Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBi2nYoVaBg0331a77JT443S1-yRdjyQ64",
  authDomain: "todolist-9bef5.firebaseapp.com",
  projectId: "todolist-9bef5",
  storageBucket: "todolist-9bef5.appspot.com",
  messagingSenderId: "333499075578",
  appId: "1:333499075578:web:748e70d377c57a81d4b243",
  measurementId: "G-SM6CCD0V9T",
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);
const loginForm = document.querySelector(".auth");
const email = document.getElementById("email-field");
const password = document.getElementById("password-field");
const errorElement = document.querySelector(".error-handle");

const loginButton = document.querySelector(".login");
const signUpButton = document.querySelector(".signup");
const localStorageButton = document.querySelector(".local-storage");

const storeContainerCreator = (uid) => async (allContainer) =>
  setDoc(doc(fireStore, "users", uid), allContainer);

const loginEmailPassword = async (e) => {
  e.preventDefault();
  const loginEmail = email.value;
  const loginPassword = password.value;

  try {
    const credential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    let allContainer = await getDoc(
      doc(fireStore, "users", credential.user.uid)
    );
    if (!allContainer.document) {
      allContainer = new Container("inbox");
    }
    console.log(allContainer);
    const storeContainer = storeContainerCreator(credential.user.uid);
    loginForm.style.visibility = "hidden";
    mainPage(storeContainer, allContainer);
  } catch (error) {
    console.log(error);
    errorElement.textContent = error;
  }
};

const signUpEmailPassword = async (e) => {
  e.preventDefault();
  const loginEmail = email.value;
  const loginPassword = password.value;

  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    let allContainer = await getDoc(
      doc(fireStore, "users", credential.user.uid)
    );
    if (!allContainer.document) {
      allContainer = new Container("inbox");
    }
    console.log(allContainer);
    const storeContainer = storeContainerCreator(credential.user.uid);
    mainPage(storeContainer, allContainer);
    loginForm.style.visibility = "hidden";
  } catch (error) {
    console.log(error);
    errorElement.textContent = error;
  }
};

loginButton.addEventListener("click", loginEmailPassword);
signUpButton.addEventListener("click", signUpEmailPassword);
localStorageButton.addEventListener("click", () => {
  const container = generateContainer();

  function storeContainer(allContainer) {
    localStorage.setItem(
      "projectArray",
      JSON.stringify(allContainer.projectArray)
    );
  }

  mainPage(storeContainer, container);
});
