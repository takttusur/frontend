import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import data from './Data/recipes.json';

const RecipeTableComponent = () => {
  const [recipes, setRecipes] = useState(data.recipes);

  const editRecipe = (recipeId) => {

  };

  const deleteRecipe = (recipeId) => {

  const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
  

  setRecipes(updatedRecipes);

  const updatedData = { ...data, recipes: updatedRecipes };

  };

  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Название</Th>
          <Th>Обед/Завтрак/Ужин</Th>
          <Th>Тип</Th>
          <Th>Действия</Th>
        </Tr>
      </Thead>
      <Tbody>
        {recipes.map((recipe) => (
          <Tr key={recipe.id}>
            <Td>{recipe.name}</Td>
            <Td>{recipe.suggestedFor.join(', ')}</Td>
            <Td>{recipe.dishType}</Td>
            <Td>
              <IconButton
                aria-label="Edit recipe"
                icon={<EditIcon />}
                onClick={() => editRecipe(recipe.id)}
                colorScheme="teal"
              />
              <IconButton
                aria-label="Delete recipe"
                icon={<DeleteIcon />}
                onClick={() => deleteRecipe(recipe.id)}
                colorScheme="red"
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default RecipeTableComponent;
