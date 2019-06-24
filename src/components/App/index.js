import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import Header from './../Header';

import Home from './../../pages/Home';
import Category from './../../pages/Category';

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
            <Route patch="/categorias/:category" exact component={Category} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
