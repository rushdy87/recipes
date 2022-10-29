import RecipeList from './components/recipe-list/RecipeList';
import { sampleRecipes } from './data/recipes';

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
}

export default App;
