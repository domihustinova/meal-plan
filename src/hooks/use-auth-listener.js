import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { FirestoreContext } from "../context/firestore";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const [measurementsData, setMeasurementsData] = useState();

  const { firebase } = useContext(FirebaseContext);
  const { db } = useContext(FirestoreContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
        setUser(authUser);
        fetchData();
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    const fetchData = async () => {
      try {
        const response = await db.collection("user").doc(user.uid).get();

        let data = { title: "not found" };

        if (response.exists) {
          data = response.data().measurements;
        }

        setMeasurementsData(data);
      } catch (err) {
        console.error(err);
      }
    };

    return () => {
      listener();
      fetchData();
    };
  }, [firebase, db, user]);

  return { user, measurementsData };
}
