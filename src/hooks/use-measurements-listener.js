import { useState, useEffect, useContext } from "react";
import { FirestoreContext } from "../context/firestore";

export default function useMeasurementsListener(user) {
  const [measurementsData, setMeasurementsData] = useState();

  const { db } = useContext(FirestoreContext);

  useEffect(() => {
    if (!user) {
      return;
    }

    const unsubscribe = db
      .collection("user")
      .doc(user.uid)
      .onSnapshot(
        {
          includeMetadataChanges: true,
        },
        (doc) => {
          if (doc.exists) {
            let data = doc.data().measurements;
            setMeasurementsData(data);
          } else {
            console.log("No such document!");
          }
        }
      );

    return () => {
      unsubscribe();
    };
  }, [db, user]);

  return { measurementsData };
}
