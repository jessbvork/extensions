import { React } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./pages/trending/Trending";
import Search from "./pages/search/Search";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Header from "./components/header/Header";
import SimpleBottomNavigation from "./components/MainNav";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} exact />
            <Route path="/series" component={Series} exact />
            <Route path="/search" component={Search} exact />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
