import React, { useState } from 'react';
import MealFileComponent from '../components/MealPlanner/MealFileComponent';
import RecipeTableComponent from '../components/MealPlanner/RecipeTableComponent';
import RecipeEditorComponent from '../components/MealPlanner/RecipeEditorComponent';
import PlanConfigurationComponent from '../components/MealPlanner/PlanConfigurationСomponent';
import data from '../components/MealPlanner/Data/recipes.json';
import MealPlanBrowserComponent from '../components/MealPlanner/MealPlanBrowserComponent';
import { Recipe } from '../components/MealPlanner/Data/Recipe';


export interface PlanConfiguration {
  arrivingDate: string;
  departureDate: string;
  preferredIngredients: string[];
  blacklistIngredients: string[];
  addSnacks: boolean;
  snacksPerDay: number;
  numberOfPeople: number;
  
}

function MealPlanner() {
  
  const [recipes, setRecipes] = useState(data.recipes);
  
  const [config, setConfig] = useState<PlanConfiguration>({
    arrivingDate: '',
    departureDate: '',
    preferredIngredients: [],
    blacklistIngredients: [],
    addSnacks: false,
    snacksPerDay: 0,
    numberOfPeople: 0,
  });

  const updateRecipes = (newRecipes: Recipe[]) => {
    setRecipes(newRecipes);
  };
  

  return (
    <div>
      <MealFileComponent data={recipes} onUpdate={updateRecipes} />
      <RecipeTableComponent recipes={recipes} updateRecipes={updateRecipes} />
      <RecipeEditorComponent recipes={recipes} updateRecipes={updateRecipes} />
      <PlanConfigurationComponent setConfig={setConfig} config={config} />
      <MealPlanBrowserComponent configrecipes={recipes as Recipe[]} />
    </div>
  );
}
export default MealPlanner;
