import React from 'react';
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom"
import Work from "./Work";
import About from "./About";


const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Work}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    );
};

export default App;