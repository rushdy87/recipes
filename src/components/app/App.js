import RecipeList from '../recipe-list/RecipeList';
import { RecipeProvider } from '../../context/RecipeContext';
import './App.css';

const App = () => {
  return (
    <RecipeProvider>
      <RecipeList />
    </RecipeProvider>
  );
};
export default App;
