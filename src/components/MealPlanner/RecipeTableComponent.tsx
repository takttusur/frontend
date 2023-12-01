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
} from '@chakra-ui/react';
import { DeleteIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Recipe } from './Data/Recipe';

interface RecipeTableComponentProps {
  recipes: Recipe[];
  updateRecipes: (recipe: Recipe[]) => void;
}

const RecipeTableComponent = (props: RecipeTableComponentProps) => {
  const {
    recipes,
    updateRecipes,
  } = props;
  const [openRecipeId, setOpenRecipeId] = useState<number | null>(null);

  const showIngredients = (recipeId:number) => {
    setOpenRecipeId((prev) => (prev === recipeId ? null : recipeId));
  };
  

  const deleteRecipe = (recipeId:number) => {
    const updatedRecipes = recipes.filter((recipe:Recipe) => recipe.id !== recipeId);
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
        {recipes.map((recipe:Recipe) => (
          <React.Fragment key={recipe.id}>
            <Tr>
              <Td>{recipe.name}</Td>
              <Td>{recipe.suggestedFor.join(', ')}</Td>
              <Td>{recipe.dishType}</Td>
              <Td>
                <IconButton
                  aria-label={openRecipeId === recipe.id ? 'Hide Ingredients' : 'Show Ingredients'}
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
                    {recipe.ingredients.map((ingredient) => (
                       <li key={ingredient.name}>
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
