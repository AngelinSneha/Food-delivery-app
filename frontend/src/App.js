import HomePage from "./HomePage";
import RestaurantMenuPage from "./RestaurantMenuPage";
import RestaurantsHomePage from "./RestaurantsHomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
    <Router>
     <Switch>
     <Route path="/restaurants">
        <RestaurantsHomePage />
      </Route>
      <Route path="/:restaurantName/menu">
        <RestaurantMenuPage />
      </Route>
     <Route path="/">
        <HomePage />
      </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
