import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OurProvider from './OurPovider';

ReactDOM.render(
    <OurProvider>
        <App age={45} />
    </OurProvider>
    , document.getElementById('root'));