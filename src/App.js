//import assets

//import components
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './routes/home/Home'
import About from './routes/about/About'
import Promotions from './routes/promotions/Promotions'

function App() {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/promotions">
            <Promotions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     
    </Router>
  );
}

export default App;
