import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  VStack,
  HStack,
  Select,
} from '@chakra-ui/react';

const RecipeEditorComponent = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    suggestedFor: [],
    dishType: 'Starter',
    ingredients: [{ name: '', Qty: 0, Units: 'Gram' }],
    cookingGuide: '',
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (index === -1) {
      setNewRecipe({ ...newRecipe, [name]: value });
    } else {
      const updatedIngredients = [...newRecipe.ingredients];
      updatedIngredients[index][name] = value;
      setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
    }
  };

  const handleAddIngredient = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, { name: '', Qty: 0, Units: 'Gram' }],
    });
  };

  const addRecipe = (recipe) => {
    // Placeholder for your addRecipe logic. Replace this with your actual implementation.
    console.log('Recipe added:', recipe);
  };

  const handleSaveRecipe = () => {
    addRecipe(newRecipe);
    setNewRecipe({
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
      <CheckboxGroup name="suggestedFor" value={newRecipe.suggestedFor} onChange={(value) => setNewRecipe({ ...newRecipe, suggestedFor: value })}>
        <Checkbox value="Breakfast">Завтрак</Checkbox>
        <Checkbox value="Lunch">Обед</Checkbox>
        <Checkbox value="Dinner">Ужин</Checkbox>
      </CheckboxGroup>
      <RadioGroup name="dishType" value={newRecipe.dishType} onChange={(value) => setNewRecipe({ ...newRecipe, dishType: value })}>
        <VStack align="start" spacing={1}>
          <Radio value="Starter">Starter</Radio>
          <Radio value="Main dish">Main dish</Radio>
          <Radio value="Snack">Snack</Radio>
          <Radio value="Dessert">Dessert</Radio>
          <Radio value="Beverages">Beverages</Radio>
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