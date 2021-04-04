import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function Dashboard({ user }) {
  const { firebase } = useContext(FirebaseContext);

  const handleLogout = () => {
    return firebase
      .auth()
      .signOut()

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <p>Hello from the dashboard, {user.displayName}!</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
