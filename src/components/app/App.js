import RecipeList from '../recipe-list/RecipeList';
import { sampleRecipes } from '../../data/recipes';

import './App.css';

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
}

export default App;
