import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import Header from './../Header';

import Busqueda from './../../pages/Busqueda';
import Deportes from './../../pages/Deportes';
import Espectaculos from './../../pages/Espectaculos';
import Home from './../../pages/Home';
import Internacional from './../../pages/Internacional';
import Politica from './../../pages/Politica';
import Tech from './../../pages/Tech';

const Layout = styled.div`
  align-items: center; 
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
        <Layout>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categoria/politica" component={Politica} />
            <Route path="/categoria/deportes" component={Deportes} />
            <Route path="/categoria/internacional" component={Internacional} />
            <Route path="/categoria/espectaculos" component={Espectaculos} />
            <Route path="/categoria/tech" component={Tech} />
            <Route path="/busqueda/:query" component={Busqueda} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
