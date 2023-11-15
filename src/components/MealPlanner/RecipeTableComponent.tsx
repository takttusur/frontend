import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const RecipeTableComponent = ({ recipes, updateRecipes }) => {
  const editRecipe = (recipeId) => {
    // Логику редактирования рецепта не написал
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
