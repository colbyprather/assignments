import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MainProvider from './MainProvider'

ReactDOM.render(
    <MainProvider>
        <App />
    </MainProvider>,
    document.getElementById('root')
)