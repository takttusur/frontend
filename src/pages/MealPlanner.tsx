import { useState } from 'react';
import MealFileComponent from '../components/MealPlanner/MealFileComponent';
import RecipeTableComponent from '../components/MealPlanner/RecipeTableComponent';
import RecipeEditorComponent from '../components/MealPlanner/RecipeEditorComponent';
import { Recipe } from '../components/MealPlanner/Data/Recipe';

function MealPlanner() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const updateRecipes : (updateFunc:((prevRecipes: Recipe[]) => Recipe[])) => void =  (func) =>  {
    setRecipes(func);
  };

  const setNewRecipesList = (newRecipes : Recipe[] ) => {
    setRecipes(newRecipes);  
  };
  
  return (
    <div>
      <MealFileComponent data={recipes} onLoad={setNewRecipesList} />
      <RecipeTableComponent recipes={recipes} updateRecipes={setNewRecipesList} />
      <RecipeEditorComponent recipes={recipes} updateRecipes={updateRecipes} />
    </div>
  );
}

export default MealPlanner;
