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
  const { arrivingDate, departureDate, preferredIngredients, blacklistIngredients, numberOfPeople } = planConfig;

  const startDate = new Date(arrivingDate);
  const endDate = new Date(departureDate);

  const mealPlan: Meal[] = [];

  const currentDate = new Date(startDate);
  let dayNumber = 1;
  let passCounter = 0; 

  while (currentDate <= endDate) {
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

        suggestedFor: time,
        date: formattedDate,
        mainDish: selectedRecipe,
      };
    });

    mealPlan.push(...meals);

    currentDate.setDate(currentDate.getDate() + 1);
    passCounter++;

    if (passCounter === 3) {
      dayNumber++;
      passCounter = 0;
    }
  }

  return mealPlan;
};


const MealPlanBrowserComponent: React.FC<MealPlanBrowserComponentProps> = (props) => {
  const { mealPlan, recipes } = props;

  const [generatedMealPlan, setGeneratedMealPlan] = useState<Meal[]>([]);
  const [isMenuModalOpen, setMenuModalOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    if (isButtonClicked) {
      generateAndSetMealPlan();
    }
  }, [isButtonClicked]);

  useEffect(() => {
    if (selectedDay !== null) {
      changeRecipe();
    }
  }, [selectedDay]);

  const generateAndSetMealPlan = () => {
    const newGeneratedMealPlan = generateMealPlan(mealPlan, recipes);
    setGeneratedMealPlan(newGeneratedMealPlan);
  };

  const openMenuModal = () => {
    setIsButtonClicked(true);
    setMenuModalOpen(true);
    setSelectedDay(null);
  };

  const closeMenuModal = () => {
    setMenuModalOpen(false);
  };

  const changeRecipe = () => {
    if (selectedDay !== null) {
      setGeneratedMealPlan((prevMealPlan) => {
        const newGeneratedMealPlan = [...prevMealPlan];
        const randomIndex = Math.floor(Math.random() * recipes.length);
        newGeneratedMealPlan[selectedDay].mainDish = recipes[randomIndex];
        return newGeneratedMealPlan;
      });
      setSelectedDay(null);
    }
  };

  return (
    <Box>
      <Heading>Планировщик меню</Heading>

      <Button onClick={openMenuModal} colorScheme="blue" mr={2}>
        Сгенерировать меню
      </Button>


      <Modal isOpen={isMenuModalOpen} onClose={closeMenuModal} size="xl">

        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ваш план готов!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table>
              <Thead>
                <Tr>

                  <Th>Прием пищи</Th>
                  <Th>Дата</Th>
                  <Th>Блюдо</Th>
                  <Th>Дейсвие</Th>
                </Tr>
              </Thead>
              <Tbody>
                {generatedMealPlan.map((meal, index) => (
                  <Tr key={index}>

                    <Td>{meal.suggestedFor}</Td>
                    <Td>{meal.date}</Td>
                    <Td>{meal.mainDish.name}</Td>
                    <Td>
                      <Button
                        colorScheme="green"
                        size="sm"
                        onClick={() => setSelectedDay(index)}
                        disabled={!isButtonClicked}
                      >
                        Изменить рецепт
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeMenuModal}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MealPlanBrowserComponent;