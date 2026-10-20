import GlobalStyle from "./komponents/GlobalStyle";
import RecipeCard from "./komponents/RecipeCard/RecipeCard";
import { List } from "./komponents/RecipeCard/RecipeCard.style";
import recipes from "../recipe.json"

const App = () => (
  <>
    <GlobalStyle />
    <List>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </List>
  </>
);

export default App;