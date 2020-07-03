import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

import About from "./About";
import Watch from "./Watch";
import Browse from "./Browse";
import Stream from "./Stream";
import Login from "./Login";
import Profile from "./Profile";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/Navbar";
import PersistentDrawerLeft from "./PersistentDrawerLeft";

//
const App = () => {
    return (
        <div>
            <Grid container direction="column">
                <NavigationBar />
                <PersistentDrawerLeft />
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Browse} />
                            <Route path="/browse" component={Browse} />
                            <Route path="/about" component={About} />
                            <Route path="/watch" component={Watch} />
                            <Route path="/stream" component={Stream} />
                            <Route path="/login" component={Login} />
                            <Route path="/profile" component={Profile} />
                        </Switch>
                    </Router>
                </Layout>
            </Grid>
        </div>
    );
};

export default App;
