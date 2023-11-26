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

import { Recipe,DishType,EatingTimes  } from './Data/Recipe';


interface RecipeTableComponentProps {
  recipes: Recipe[];
  updateRecipes: (recipe: Recipe[]) => void;
}



const RecipeEditorComponent = (props: RecipeTableComponentProps ) => {
  const {
    recipes,
    updateRecipes,
  } = props
 
  const generateRecipeId = () => {
    return new Date().getTime(); 
  };

  const [newRecipe, setNewRecipe] = useState({
    id: generateRecipeId(), 
    name: '',
    suggestedFor: [],
    dishType: 'Starter',
    ingredients: [{ name: '', Qty: 0, Units: 'Gram' }],
    cookingGuide: '',
  });

  const handleRecipeChange = (name: keyof typeof newRecipe, value: any, index: number = -1) => {
    if (index === -1) {
      setNewRecipe({ ...newRecipe, [name]: value });
    } else {
      const updatedIngredients = [...newRecipe.ingredients];
      updatedIngredients[index][name] = value;
      setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
    }
  };
  
  const handleInputChange = (e, index: number) => {
    const { name, value } = e.target;
    handleRecipeChange(name, value, index);
  };
  

  const handleAddIngredient = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, { name: '', Qty: 0, Units: 'Gram' }],
    });
  };

  const handleCheckboxChange = (value: EatingTimes) => {
    const updatedSuggestedFor = newRecipe.suggestedFor.includes(value)
      ? newRecipe.suggestedFor.filter(time => time !== value)
      : [...newRecipe.suggestedFor, value];
  
    setNewRecipe({ ...newRecipe, suggestedFor: updatedSuggestedFor });
  };
  
  

  const handleSaveRecipe = () => {
    updateRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    setNewRecipe({
      id: generateRecipeId(),
      name: '',
      suggestedFor: [],
      dishType: 'Starter',
      ingredients: [{ name: '', Qty: 0, Units: 'Gram' }],
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
            <option value="Gram">Gram</option>
            <option value="Kilogram">Kilogram</option>
            <option value="Units">Units</option>
            <option value="Millilitres">Millilitres</option>
            <option value="Litres">Litres</option>
            <option value="Pack">Pack</option>
            <option value="Bottle">Bottle</option>
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
