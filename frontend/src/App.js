import HomeScreen from "./HomeScreen";
import HelpPageScreen from "./HelpPageScreen"
import MenuScreen from "./MenuScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from "./LoginScreen"
function App() {
  return (
    <div className="app">
    <Router>
     <Switch>
      <Route path="/menu">
        <MenuScreen />
      </Route>
      <Route path="/help">
        <HelpPageScreen />
      </Route>
      <Route path="/login">
        <LoginScreen />
        </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
