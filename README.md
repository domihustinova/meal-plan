<p align="center">
 <h1 align="center">🥩 🥪 🥦 MealPal 🫐 🍕 🥒</h1>
</p>

<p align="center">
  A web application that helps users plan their daily meals. Based on their body measurements, it calculates recommended calorie intake for a selected goal and offers different macronutrient values for most common diets. Using the user's saved recipes and meals, the app generates a meal plan that meets the calculated requirements.
</p>

<p align="center">
  <img align="center" src="/docs/images/landingPage.png" alt="Landing Page" width="100%" />
</p>

<p align="center">
  <h2 align="center">🚧 This project is still a work in progress 🚧</h2>
</p>

### ⚙️ Installation

- open project [MealPal](https://meal-pal.vercel.app/) directly in your browser (Google Chrome recommended)
- or clone project [meal-plan](https://github.com/domihustinova/meal-plan) from GitHub, create [Firebase project](https://firebase.google.com/) and replace `firebaseConfig` in the file `meal-plan/src/lib/firebase.prod.js` with your own keys and identifiers and run `yarn install && yarn start`

```
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
```

If you would like to check the app but you don't feel like creating an account, you can use these test credentials:

```
mealpaltest@gmail.com
mealpal123
```

If you would like to check the app but you don't feel like creating an account, you can use these test credentials:

```
mealpaltest@gmail.com
mealpal123
```

---

### 🚀 Current Features

- visit either landing page or account protected pages
- calculate your daily calorie intake for different goals: maintenance, cutting, or bulking
- update your profile with your body measurements, activity, and body goals
- multiple options for recipes search
- save, view, edit or delete saved recipes
- when searching for a recipe, see which recipes you already saved
- create, view, edit or delete your own meals
- view saved recipes and meals in list or grid view
- save the selected view to LocalStorage

<p align="center">
  <img align="center" src="/docs/images/gridView.png" alt="Meals - Grid View" width="100%" />
  <img align="center" src="/docs/images/listView.png" alt="Meals - List View" width="100%" />
</p>

---

### 🚧 What is on my to-do list? 📝

- generating meal plan based on different criteria - total calorie intake, macronutrients, dietary restrictions,...
- more options for recipe search
- the app's responsiveness
- possibility to upload a photo for the new meal
- saved recipes/meals filtering
- option to save the final plan as PDF
- Google Sign-In
- account settings
- and many more...
