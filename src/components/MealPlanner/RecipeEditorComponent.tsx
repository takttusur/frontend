import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  VStack,
  HStack,
  Select,
} from '@chakra-ui/react';

import { Recipe, DishType, EatingTimes, MeasurementUnits, Ingredient  } from './Data/Recipe';

interface IRecipe {
  id: number;
  name: string;
  suggestedFor: EatingTimes[];
  dishType: DishType;
  ingredients: Ingredient[];
  cookingGuide: string;
}

interface RecipeTableComponentProps {
  recipes: Recipe[];
  updateRecipes: (recipe: Recipe[]) => void;
}


const RecipeEditorComponent = (props: RecipeTableComponentProps) => {
  const {
    recipes,
    updateRecipes,
  } = props;
 
  const generateRecipeId = () => {

    const maxId = recipes.reduce((max, recipe) => (recipe.id > max ? recipe.id : max), 0);
  
  
    return maxId + 1;
  };

  const [newRecipe, setNewRecipe] = useState<IRecipe>({
    id: generateRecipeId(),
    name: '',
    suggestedFor: [] as EatingTimes[],
    dishType: DishType.STARTER,
    ingredients: [{ name: '', Qty: 0, Units: MeasurementUnits.GRAM }],
    cookingGuide: '',
  });
  
  const handleRecipeChange = (name: keyof typeof newRecipe, value: string, index: number = -1) => {
    if (index === -1) {
      setNewRecipe({ ...newRecipe, [name]: value });
    } else {
      const updatedIngredients: Ingredient[] = [...newRecipe.ingredients];
      updatedIngredients[index][name] = value;
      setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
    }
  };
  
  const handleInputChange = <K extends keyof typeof newRecipe>(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const { name, value } = e.target;
    handleRecipeChange(name as K, value, index);
  };
  
  
  

  const handleAddIngredient = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, { name: '', Qty: 0, Units: MeasurementUnits.GRAM }],
    });
  };

  const handleCheckboxChange = (value: EatingTimes) => {
    const updatedSuggestedFor = newRecipe.suggestedFor.includes(value)
      ? newRecipe.suggestedFor.filter(time => time !== value)
      : [...newRecipe.suggestedFor, value];

    setNewRecipe({ ...newRecipe, suggestedFor: updatedSuggestedFor });
  };
  

  const handleSaveRecipe = () => {

    if (!newRecipe.name.trim() || newRecipe.ingredients.length === 0) {
      alert('Укажите название рецепта и хотя бы один ингредиент.');
      return;
    }
  

    const ingredientNames = newRecipe.ingredients.map(ingredient => ingredient.name.trim().toLowerCase());
    const uniqueIngredientNames = new Set(ingredientNames);
    if (ingredientNames.length !== uniqueIngredientNames.size) {
      alert('Имена ингредиентов должны быть уникальными.');
      return;
    }
  
    const invalidQuantity = newRecipe.ingredients.some(ingredient => ingredient.Qty <= 0);
    if (invalidQuantity) {
      alert('Количество должно быть положительным числом.');
      return;
    }

    if (newRecipe.suggestedFor.length === 0) {
      alert('Выберите хотя бы одно время приема пищи.');
      return;
    }

    if (!newRecipe.dishType) {
      alert('Выберите тип блюда.');
      return;
    }
  

    const dishNameExists = recipes.some(recipe => recipe.name.trim().toLowerCase() === newRecipe.name.trim().toLowerCase());
    if (dishNameExists) {
      alert('Название рецепта должно быть уникальным.');
      return;
    }
  

    updateRecipes((prevRecipes: Recipe[]) => [...prevRecipes, newRecipe]);


    setNewRecipe({
      id: generateRecipeId(),
      name: '',
      suggestedFor: [],
      dishType: DishType.STARTER,
      ingredients: [{ name: '', Qty: 0, Units: MeasurementUnits.GRAM }],
      cookingGuide: '',
    });
  };
  
  
  

  

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Добавить рецепт
      </Heading>
      <Input
        name="name"
        value={newRecipe.name}
        onChange={(e) => handleInputChange(e, -1)}
        placeholder="Recipe Name"
        mb={2}
      />
        <Checkbox
  isChecked={newRecipe.suggestedFor.includes(EatingTimes.BREAKFAST)}
  onChange={() => handleCheckboxChange(EatingTimes.BREAKFAST)}
>
  Завтрак
</Checkbox>

<Checkbox
  isChecked={newRecipe.suggestedFor.includes(EatingTimes.LUNCH)}
  onChange={() => handleCheckboxChange(EatingTimes.LUNCH)}
>
  Обед
</Checkbox>

<Checkbox
  isChecked={newRecipe.suggestedFor.includes(EatingTimes.DINNER)}
  onChange={() => handleCheckboxChange(EatingTimes.DINNER)}
>
  Ужин
</Checkbox>
                <RadioGroup
            name="dishType"
            value={newRecipe.dishType}
            onChange={(value) => setNewRecipe({ ...newRecipe, dishType: value as DishType })}
          >
  <VStack align="start" spacing={1}>
    <Radio value={DishType.STARTER}>Starter</Radio>
    <Radio value={DishType.MAINDISH}>Main dish</Radio>
    <Radio value={DishType.SNACK}>Snack</Radio>
    <Radio value={DishType.DESSERT}>Dessert</Radio>
    <Radio value={DishType.BEVERAGES}>Beverages</Radio>
  </VStack>
</RadioGroup>

      <Heading as="h3" size="md" my={2}>
        Ингредиенты
      </Heading>
      {newRecipe.ingredients.map((ingredient, index) => (
        <HStack key={index} spacing={2} mb={2}>
          <Input
            name="name"
            value={ingredient.name}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Ingredient Name"
          />
          <Input
            name="Qty"
            value={ingredient.Qty}
            type="number"
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Quantity"
          />
          <Select
            name="Units"
            value={ingredient.Units}
            onChange={(e) => handleInputChange(e, index)}
          >
            {Object.values(MeasurementUnits).map(unit => (
              <option key={unit} value={unit}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)} {}
              </option>
            ))}
          </Select>
        </HStack>
      ))}
      <Button onClick={handleAddIngredient}>Добавить ингредиент</Button>
      <Textarea
        name="cookingGuide"
        value={newRecipe.cookingGuide}
        onChange={(e) => handleInputChange(e, -1)}
        placeholder="Cooking Guide"
        my={2}
      />
      <Button onClick={handleSaveRecipe} colorScheme="teal">
        Save Recipe
      </Button>
    </Box>
  );
};

export default RecipeEditorComponent;
