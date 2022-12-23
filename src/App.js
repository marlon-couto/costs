import { Switch, Route } from 'react-router-dom';

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route
          exact
          path="/company"
          component={Company}
        />

        <Route
          exact
          path="/contact"
          component={Contact}
        />

        <Route
          exact
          path="/new-project"
          component={NewProject}
        />

        <Route
          exact
          path="/"
          component={Home}
        />
      </Switch>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
