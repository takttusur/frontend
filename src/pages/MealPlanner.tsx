// MealPlanner.tsx
import React, { useState, useEffect } from 'react';
import MealFileComponent from '../components/MealPlanner/MealFileComponent';
import RecipeTableComponent from '../components/MealPlanner/RecipeTableComponent';
import RecipeEditorComponent from '../components/MealPlanner/RecipeEditorComponent';
import data from '../components/MealPlanner/Data/recipes.json';



function MealPlanner() {
  const [recipes, setRecipes] = useState(data.recipes);
  return (
    <div>
      <MealFileComponent
        data={recipes} 
      />
      <RecipeTableComponent />
      <RecipeEditorComponent />
    </div>
  );
}

export default MealPlanner;
