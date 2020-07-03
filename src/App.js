import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoInput from './components/ToDoInput';
import ToDoItem from './components/ToDoItem'
import ToDoList from './components/ToDoList'
function App() {
  return (
    <div className="App">
        <h1>Initial Setup</h1>
        <ToDoInput />
        <ToDoItem />
        <ToDoList />
    </div>
  );
}

export default App;
