import React from 'react';

const Form = ({Input, setInput, Todo, setTodo, setStatus, status, setFilteredTodo}) => {

const inputHandler = (e) => {
  setInput(e.target.value);
};
const addHandler = (e) => {
  e.preventDefault();
  setTodo([
    ...Todo, 
    {text: Input, checked: false, id: Math.random()*1000}
  ]);
  setInput("");
};
const statusHandler = (e) => {
    setStatus(e.target.value);
}
    return(
        <div className= "todolist-container">
            <div className= "input-container">
                <h3>Please enter item to add</h3>
                <form id="input-form">
                    <input value={Input} onChange= {inputHandler} type="text" name="input" id="input-item"></input>
                    <button onClick= {addHandler} id="input-btn">+</button>
                </form>
            </div>
            <div className= "status-container">
                <select onChange= {statusHandler} name="status" className="select-status">
                    <option value="all">All</option>
                    <option value="checked">checked</option>
                    <option value="yet to be done">yet to be done</option>
                </select>
            </div>
        </div>
    );
}

export default Form;