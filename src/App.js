import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Task from './components/Task';

function App() {
const [list, setList] = useState([]);
  return (
    <div className = "App">
      <List list = {list} setList = {setList}/>
      <Task list = {list} setList = {setList}/>
    </div>
  );
}

export default App;

