import React from 'react';
import Color from './Color';

const App = () => {
    return (
        <div>
            <Color backgroundColor="blue" Title="This is blue" Subtitle="Sub blue" Information="About the color Blue"/>
            <Color backgroundColor="purple" Title="This is purple" Subtitle="Sub purple" Information="About the color purple"/>
            <Color backgroundColor="yellow" Title="This is yellow" Subtitle="Sub yellow" Information="About the color yellow"/>
            <Color backgroundColor="red" Title="This is red" Subtitle="Sub red" Information="About the color red"/>
            <Color backgroundColor="orange" Title="This is orange" Subtitle="Sub orange" Information="About the color orange"/>
            <Color backgroundColor="aqua" Title="This is aqua" Subtitle="Sub aqua" Information="About the color aqua"/>
            <Color backgroundColor="green" Title="This is green" Subtitle="Sub green" Information="About the color green"/>
            <Color backgroundColor="silver" Title="This is silver" Subtitle="Sub silver" Information="About the color silver"/>
            <Color backgroundColor="pink" Title="This is pink" Subtitle="Sub pink" Information="About the color pink"/>
            <Color backgroundColor="grey" Title="This is grey" Subtitle="Sub grey" Information="About the color grey"/>
        </div>
    )
}

export default App