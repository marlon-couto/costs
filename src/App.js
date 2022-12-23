import { Switch, Route } from 'react-router-dom';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Navbar />

      <Container customClass="min_height">
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
            path="/projects"
            component={Projects}
          />

          <Route
            exact
            path="/"
            component={Home}
          />
        </Switch>
      </Container>

      <Footer />
    </>
  );
}

export default App;
