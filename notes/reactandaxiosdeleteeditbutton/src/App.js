import React from 'react';
import Form from './Form';
import TodoContainer from './TodoContainer'
import './App.css';

function App() {
  return (
    <div>
      <Form button='Submit' type="add" />
      <TodoContainer />
    </div>
  );
}

export default App;
