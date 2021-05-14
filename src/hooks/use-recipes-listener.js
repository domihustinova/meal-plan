import { useState, useEffect, useContext } from "react";
import { FirestoreContext } from "../context/firestore";

export default function useRecipesListener(user) {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [savedRecipesIds, setSavedRecipesIds] = useState([]);

  const { db } = useContext(FirestoreContext);

  useEffect(() => {
    if (!user) {
      return;
    }

    const unsubscribe = db
      .collection("recipes")
      .doc(user.uid)
      .collection("userRecipes")
      .onSnapshot((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        const tempDocIds = querySnapshot.docs.map((doc) => doc.id);
        setSavedRecipes(tempDoc);
        setSavedRecipesIds(tempDocIds);
      });

    return () => {
      unsubscribe();
    };
  }, [db, user]);

  return { savedRecipes, savedRecipesIds };
}
