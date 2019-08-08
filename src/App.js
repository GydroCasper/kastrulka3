import React from 'react';
import './App.css';
import Layout from './hoc/Layout';
import { Route, Switch } from 'react-router-dom';
import HostComponent from './Host/components/hostComponent';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={HostComponent} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
