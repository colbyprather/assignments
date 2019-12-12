import React from 'react'
import ReactDOM from 'react-dom'
require("dotenv").config();
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import MainProvider from './MainProvider'
app.use("/auth", require("./routes/auth"));

ReactDOM.render(
    <BrowserRouter>
        <MainProvider>
            <App />
        </MainProvider>
    </BrowserRouter>
    , document.getElementById('root')
)