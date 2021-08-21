import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import CreateProfile from "./pages/CreateProfile";
import NavigationBar from "./pages/NavigationBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/create-profile">
          <CreateProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
