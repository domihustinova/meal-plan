import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecipesContainer } from "../containers/Recipes";

const queryClient = new QueryClient();

export default function Recipes({ user, savedRecipesIds }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecipesContainer user={user} savedRecipesIds={savedRecipesIds} />
    </QueryClientProvider>
  );
}
