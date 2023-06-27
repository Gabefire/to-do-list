import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import generateContainer from "./modules/localStorage";

import mainPage from "./modules/main";

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

// Local Storage

const allContainer = generateContainer();

function storeContainer() {
  localStorage.setItem(
    "projectArray",
    JSON.stringify(allContainer.projectArray)
  );
}

mainPage(storeContainer, allContainer);
