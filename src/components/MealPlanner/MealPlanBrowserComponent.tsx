import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Recipe, EatingTimes } from './Data/Recipe';
import { PlanConfiguration } from '../../pages/MealPlanner';


interface MealPlanBrowserComponentProps {
  mealPlan: PlanConfiguration;
  recipes: Recipe[];
}


interface Meal {
  day: number;
  suggestedFor: EatingTimes;
  date: string;
  mainDish: Recipe;
}

const generateMealPlan = (planConfig: PlanConfiguration, recipes: Recipe[]): Meal[] => {
  const { arrivingDate, departureDate, preferredIngredients, blacklistIngredients } = planConfig;

  const startDate = new Date(arrivingDate);
  const endDate = new Date(departureDate);

  const mealPlan: Meal[] = [];

  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const dayNumber = mealPlan.length + 1;
    const formattedDate = currentDate.toISOString().split('T')[0];

    const meals: Meal[] = Object.values(EatingTimes).map((time) => {
      const availableRecipes = recipes.filter((recipe) => {


        const doesNotIncludeBlacklistIngredients =
          !blacklistIngredients.some((ingredient) => recipe.ingredients.some((i) => i.name.includes(ingredient)));

        return doesNotIncludeBlacklistIngredients && recipe.suggestedFor.includes(time);
      });

      const randomIndex = Math.floor(Math.random() * availableRecipes.length);
      const selectedRecipe = availableRecipes[randomIndex];

      return {
        day: dayNumber,
        suggestedFor: time,
        date: formattedDate,
        mainDish: selectedRecipe,
      };
    });

    mealPlan.push(...meals);

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return mealPlan;
};


const MealPlanBrowserComponent: React.FC<MealPlanBrowserComponentProps> = (props) => {
  const { mealPlan, recipes } = props;

  const [generatedMealPlan, setGeneratedMealPlan] = useState<Meal[]>([]);
  const [isMenuModalOpen, setMenuModalOpen] = useState(false);


  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {

    if (isButtonClicked) {
      generateAndSetMealPlan();
    }
  }, [isButtonClicked]);

  const generateAndSetMealPlan = () => {
    const newGeneratedMealPlan = generateMealPlan(mealPlan, recipes);
    setGeneratedMealPlan(newGeneratedMealPlan);
  };

  const openMenuModal = () => {

    setIsButtonClicked(true);
    setMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setMenuModalOpen(false);
  };

  return (
    <Box>
      <Heading>Meal Plan Browser</Heading>


      <Button onClick={openMenuModal} colorScheme="blue" mr={2}>
        View Generated Meal Plan
      </Button>

      {/* Modal to display the generated meal plan */}
      <Modal isOpen={isMenuModalOpen} onClose={closeMenuModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Generated Meal Plan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table>
              <Thead>
                <Tr>
                  <Th>Day</Th>
                  <Th>Suggested For</Th>
                  <Th>Date</Th>
                  <Th>Main Dish</Th>
                </Tr>
              </Thead>
              <Tbody>
                {generatedMealPlan.map((meal) => (
                  <Tr key={meal.day}>
                    <Td>{meal.day}</Td>
                    <Td>{meal.suggestedFor}</Td>
                    <Td>{meal.date}</Td>
                    <Td>{meal.mainDish.name}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeMenuModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MealPlanBrowserComponent;