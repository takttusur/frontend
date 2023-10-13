// MealPlanner.tsx
import React from 'react';
import MealFileComponent from '../components/MealPlanner/MealFileComponent';
import RecipeTableComponent from '../components/MealPlanner/RecipeTableComponent';
import RecipeEditorComponent from '../components/MealPlanner/RecipeEditorComponent';

function MealPlanner() {
  return (
    <div>
      <MealFileComponent />
      <RecipeTableComponent />
      <RecipeEditorComponent />
    </div>
  );
}

export default MealPlanner;
