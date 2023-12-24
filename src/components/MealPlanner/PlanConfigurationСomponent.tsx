import React, { useState } from 'react';
import { PlanConfiguration } from '../../pages/MealPlanner';
import {
  Box,
  Heading,
  Input,
  Button,
  Checkbox,
  VStack,
  Textarea,
} from '@chakra-ui/react';

interface PlanConfigurationComponentProps {
  setConfig: (newConfig: PlanConfiguration) => void;
  config: PlanConfiguration;
}

const PlanConfigurationComponent: React.FC<PlanConfigurationComponentProps> = ({ config, setConfig }) => {

  const handleArrivingDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, arrivingDate: event.target.value });
  };

  const handleDepartureDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, departureDate: event.target.value });
  };

  const handlePrefferedIngridientsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const preferredIngredients = event.target.value.split(',').map(item => item.trim());
    setConfig({ ...config, preferredIngredients });
  };

  const handleBlackListIngridientsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const blacklistIngredients = event.target.value.split(',').map(item => item.trim());
    setConfig({ ...config, blacklistIngredients });
  };

  const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, numberOfPeople: Number(event.target.value) });
  };

  const handleAddSnacksChange = () => {

  };


  return (
    <Box>
    <Heading as="h2" size="lg" mb={4}>
      Даты поездки  
    </Heading>
    <Input
      type="date"
      value={config.arrivingDate}
      onChange={handleArrivingDateChange}
      placeholder="Arriving Date"
      mb={2}
    />
    <Input
      type="date"
      value={config.departureDate}
      onChange={handleDepartureDateChange}
      placeholder="Departure Date"
      mb={2}
    />
    <VStack align="start" spacing={2} mb={2}>
      <Textarea
        placeholder="Запрещенные ингредиенты"
        value={config.preferredIngredients.join(', ')}
        onChange={handlePrefferedIngridientsChange}
      />
      <Textarea
        placeholder="Предпочтительные ингредиенты"
        value={config.blacklistIngredients.join(', ')}
        onChange={handleBlackListIngridientsChange}
      />
    </VStack>
    <Heading as="h3" size="md" mb={2}>
      Количество людей
    </Heading>
    <Input
      type="number"
      value={config.numberOfPeople}
      onChange={handleNumberOfPeopleChange}
      placeholder="Number of People"
      mb={2}
    />
    <Checkbox
      isChecked={config.addSnacks}
      onChange={handleAddSnacksChange}
      mb={2}
    >
      Добавить перекус
    </Checkbox>
    {config.addSnacks && (
      <Input
        type="number"
        value={config.snacksPerDay}
        onChange={handleAddSnacksChange}
        placeholder="Snacks Per Day"
        mb={2}
      />
    )}
  </Box>
  );
};

export default PlanConfigurationComponent;
