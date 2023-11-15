import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Collapse,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const RecipeTableComponent = ({ recipes, updateRecipes }) => {
  const [openRecipeId, setOpenRecipeId] = useState(null);

  const showIngredients = (recipeId) => {
    setOpenRecipeId(openRecipeId === recipeId ? null : recipeId);
  };

  const deleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    updateRecipes(updatedRecipes);
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
          <React.Fragment key={recipe.id}>
            <Tr>
              <Td>{recipe.name}</Td>
              <Td>{recipe.suggestedFor.join(', ')}</Td>
              <Td>{recipe.dishType}</Td>
              <Td>
                <IconButton
                  aria-label={openRecipeId === recipe.id ? "Hide Ingredients" : "Show Ingredients"}
                  onClick={() => showIngredients(recipe.id)}
                  colorScheme="teal"
                  icon={openRecipeId === recipe.id ? <ChevronUpIcon /> : <ChevronDownIcon />}
                />
                <IconButton
                  aria-label="Delete recipe"
                  icon={<DeleteIcon />}
                  onClick={() => deleteRecipe(recipe.id)}
                  colorScheme="red"
                  ml="2"
                />
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={4}>
                <Collapse in={openRecipeId === recipe.id}>
                  <Box p="4">
                    <Text fontWeight="bold">Ингредиенты:</Text>
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                          {ingredient.name}: {ingredient.Qty} {ingredient.Units}
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Collapse>
              </Td>
            </Tr>
          </React.Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export default RecipeTableComponent;
