import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts';

const AppRoute = ({component: Component, rest}) => {
  return <Route 
  {...rest}
  render={(routeProps) => <Layout>
    <Component {...routeProps}></Component>
  </Layout>}/>;
}

/* ({ component: Component, rest }) => {
  return <Route
    {...rest}
    render={() => <FullLayout>
      <Component></Component>
    </FullLayout>} />;
}; */

/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */