import React from "react";
import { render } from "react-dom";
import App from "./App";
import { firebase, db } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
import { FirestoreContext } from "./context/firestore";

render(
  <FirebaseContext.Provider value={{ firebase }}>
    <FirestoreContext.Provider value={{ db }}>
      <App />
    </FirestoreContext.Provider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
