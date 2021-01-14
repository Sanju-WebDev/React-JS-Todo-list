import React, {useState,useEffect} from "react";
import './App.css';
//import components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {

//useStates
const [Input, setInput] = useState("");
const [Todo, setTodo] = useState([]);
const [status, setStatus] = useState("all");
const [filteredTodo, setFilteredTodo] = useState([]);

//useEffect for status & ssave to local storage
useEffect( () => {
  filteredTodoHandler();
  saveToLocal();
}, [Todo, status] );
//useEffect for getting items from local storage
useEffect(() => {
  getFromLocal();
}, []);
//save to localStorage
const saveToLocal = () => {
  localStorage.setItem("Todos", JSON.stringify(Todo));
}
//retrive from local storage
const getFromLocal = () => {
  if(localStorage.getItem("Todos") === null) {
    localStorage.setItem("Todos",JSON.stringify([]));
  } else {
    let storageItems = JSON.parse(localStorage.getItem("Todos"));
    setFilteredTodo(storageItems);
  }
}
const filteredTodoHandler = () => {
    switch (status) {
        case "checked":
            setFilteredTodo( Todo.filter( (item) => item.checked === true ) );
            break;
        case "yet to be done":
            setFilteredTodo( Todo.filter( (item) => item.checked === false ) );
            break;
        default:
            setFilteredTodo(Todo);
    }
}
  return (
    <div className="App">
        <h1>TODO list</h1>
        <Form 
            Input= {Input} 
            setInput= {setInput}
            Todo= {Todo}
            setTodo= {setTodo} 
            setStatus= {setStatus} 
            status= {status} 
            setFilteredTodo= {setFilteredTodo}       
        />
        <Todolist 
            Todo= {Todo}
            setTodo= {setTodo}
            filteredTodo= {filteredTodo}
        />
    </div>
  );
}

export default App;
