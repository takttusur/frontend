import React, { useState } from 'react';
import MealFileComponent from '../components/MealPlanner/MealFileComponent';
import RecipeTableComponent from '../components/MealPlanner/RecipeTableComponent';
import RecipeEditorComponent from '../components/MealPlanner/RecipeEditorComponent';
import data from '../components/MealPlanner/Data/recipes.json';
import { Recipe } from '../components/MealPlanner/Data/Recipe';

function MealPlanner() {
  const [recipes, setRecipes] = useState(data.recipes);

  const updateRecipes = (newRecipes: Recipe[]) => {
    setRecipes(newRecipes);
  };

  return (
    <div>
      <MealFileComponent data={recipes} onUpdate={updateRecipes} />
      <RecipeTableComponent recipes={recipes} updateRecipes={updateRecipes} />
      <RecipeEditorComponent recipes={recipes} updateRecipes={updateRecipes} />
    </div>
  );
}

export default MealPlanner;
