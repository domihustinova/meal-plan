import { useState, useEffect, useContext } from "react";
import { FirestoreContext } from "../context/firestore";

export default function useCaloriesListener(user) {
  const [caloriesData, setCaloriesData] = useState({});

  const { db } = useContext(FirestoreContext);

  useEffect(() => {
    if (!user) {
      return;
    }

    const unsubscribe = db
      .collection("calories")
      .doc(user.uid)
      .onSnapshot(
        {
          includeMetadataChanges: true,
        },
        (doc) => {
          if (doc.exists) {
            let data = doc.data();
            setCaloriesData(data);
          } else {
            console.log("No such document!");
          }
        }
      );

    return () => {
      unsubscribe();
    };
  }, [db, user]);

  return { caloriesData };
}
