import React from 'react';
import Navbar from './Navbar'

import Home from './Home'
import Water from './Water'
import Grass from './Grass'
import Fire from './Fire'
import PokemonDetail from './PokemonDetail'
import './App.css'

import {Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Navbar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/water' component={Water} />
                <Route path='/grass' component={Grass} />
                <Route path='/fire' component={Fire} />
                <Route path='/pokemon/:id' component={PokemonDetail} />
            </Switch>
        </div>
    );
};

export default App;