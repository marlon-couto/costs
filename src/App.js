import { Switch, Route } from 'react-router-dom';

import Container from './components/layout/container/Container';
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';

import Company from './components/pages/company/Company';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import NewProject from './components/pages/new-project/NewProject';
import Projects from './components/pages/projects/Projects';

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
