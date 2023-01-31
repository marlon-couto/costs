import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import NewProject from './pages/projects/NewProject';
import Projects from './pages/projects/Projects';
import ProjectDetails from './pages/projects/ProjectDetails';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Navbar />

      <Container customClass="min_height">
        <Switch>
          <Route exact path="/project/:id" component={ProjectDetails} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/new-project" component={NewProject} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>

      <Footer />
    </>
  );
}
