import { Switch, Route } from 'react-router-dom';

import Container from './components/layout/Container';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Container customClass="min-height">
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
        </Container>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
