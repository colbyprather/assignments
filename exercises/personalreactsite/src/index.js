import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import MainProvider from './MainProvider'

ReactDOM.render(
    <BrowserRouter>
    <MainProvider>
        <App />
    </MainProvider>
    </BrowserRouter>,
    document.getElementById('root')
)