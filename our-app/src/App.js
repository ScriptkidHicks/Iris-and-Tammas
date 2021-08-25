import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import CreateProfile from "./pages/CreateProfile";
import NavigationBar from "./pages/NavigationBar";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3002", {
      credentials: "include",
      mode: "no-cors",
    }).then((response) => {
      console.log(response);
    });
  }, []);

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
