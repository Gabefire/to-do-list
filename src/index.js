import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import generateContainer from "./modules/localStorage";

import mainPage from "./modules/main";

import "./style.css";

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
const auth = getAuth(app);
const loginForm = document.querySelector(".auth");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorElement = document.querySelector(".error-handle");

const loginButton = document.querySelector(".login");

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
    console.log(credential.user);
    loginForm.style.visibility = "hidden";
  } catch (error) {
    console.log(error);
    errorElement.textContent = error;
  }
};

loginButton.addEventListener("click", loginEmailPassword);

// Local Storage

const allContainer = generateContainer();

function storeContainer() {
  localStorage.setItem(
    "projectArray",
    JSON.stringify(allContainer.projectArray)
  );
}

mainPage(storeContainer, allContainer);
