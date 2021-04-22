import { useState, useEffect, useContext } from "react";
import { FirestoreContext } from "../context/firestore";

export default function useMeasurementsListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const [measurementsData, setMeasurementsData] = useState();

  const { db } = useContext(FirestoreContext);

  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot(
          {
            includeMetadataChanges: true,
          },
          (doc) => {
            if (doc.exists) {
              let data = doc.data().measurements;
              console.log("Document data:", data);
              setMeasurementsData(data);
            } else {
              console.log("No such document!");
            }
          }
        );
    }
  }, [db, user]);

  return { measurementsData };
}
