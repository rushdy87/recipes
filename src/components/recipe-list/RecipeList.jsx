import { useContext } from 'react';

import Recipe from '../recipe/Recipe';
import { RecipeContext } from '../../context/RecipeContext';

import './RecipeList.css';

const RecipeList = () => {
  const { recipes, handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
