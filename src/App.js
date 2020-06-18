import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from "@material-ui/core";

import Watch  from './Watch';
import Browse  from './Browse';
import Stream from './Stream';
import Login from './Login';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navbar';


const App = () => {
    return (
      <div>
        <Grid container direction="column"> 
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component = {Browse} />
              <Route exact path="/browse" component = {Browse} />
              <Route path="/watch" component = {Watch} />
              <Route path="/stream" component = {Stream} />
              <Route path="/login" component = {Login} />
            </Switch>
          </Router>
        </Layout>
        </Grid>
        </div>
    )
  }

export default App;
