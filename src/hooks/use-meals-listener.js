import { useState, useEffect, useContext } from "react";
import { FirestoreContext } from "../context/firestore";

export default function useMealsListener(user) {
  const [savedMeals, setSavedMeals] = useState([]);
  const [savedMealsIds, setSavedMealsIds] = useState([]);

  const { db } = useContext(FirestoreContext);

  useEffect(() => {
    if (!user) {
      return;
    }

    const unsubscribe = db
      .collection("meals")
      .doc(user.uid)
      .collection("userMeals")
      .onSnapshot((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        const tempDocIds = querySnapshot.docs.map((doc) => doc.id);
        setSavedMeals(tempDoc);
        setSavedMealsIds(tempDocIds);
      });

    return () => {
      unsubscribe();
    };
  }, [db, user]);

  return { savedMeals, savedMealsIds };
}
