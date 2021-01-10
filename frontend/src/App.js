import HomePage from "./components/HomePage";
import HelpPage from "./HelpPage"
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login"
function App() {
  return (
    <div className="app">
    <Router>
     <Switch>
      <Route path="/menu">
        <RestaurantMenuPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
      <Route path="/login">
        <Login />
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
