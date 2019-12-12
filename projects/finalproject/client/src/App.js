import React from 'react'
import Nav from './Nav'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import AdultMale from './AdultMale'
import AdultFemale from './AdultFemale'
import TeenMale from './TeenMale'
import TeenFemale from './TeenFemale'
import KidMale from './KidMale'
import KidFemale from './KidFemale'
import Details from './Details'


const App = () => {

    return (
        
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/adultmale' component={AdultMale}/>
                <Route path='/adultfemale' component={AdultFemale}/>
                <Route path='/teenmale' component={TeenMale}/>
                <Route path='/teenfemale' component={TeenFemale}/>
                <Route path='/kidmale' component={KidMale}/>
                <Route path='/kidfemale' component={KidFemale}/>
                <Route path='/details/:_id' component={Details} />
            </Switch>
        </div>
    );
};

export default App;