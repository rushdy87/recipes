import IngredientList from '../ingredient-list/IngredientList';

const Recipe = ({ name, cookTime, servings, instructions, ingredients }) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>ingredients:</span>
        <IngredientList ingredients={ingredients} />
      </div>
    </div>
  );
};

export default Recipe;
