import { useState, useEffect, createContext } from 'react';
import { v4 as uuid } from 'uuid';

import { sampleRecipes } from '../data/recipes';

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipesJSON) {
      setRecipes(JSON.parse(recipesJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuid(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [{ id: uuid(), name: 'Name', amount: '1 Tbs' }],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const recipeContextValue = {
    recipes,
    handleRecipeAdd,
    handleRecipeDelete,
  };
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      {children}
    </RecipeContext.Provider>
  );
};
