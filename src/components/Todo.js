import React from 'react';

const Todo = ( {text, Todo, setTodo, each} ) => {

const checkBtnHandler = () => {
    setTodo(
        Todo.map( (item) => {
            if(item.id === each.id) {
                return{
                    ...item, 
                    checked: !item.checked, 
                };
            } return item;
        } )
    );
};    
const deleteBtnHandler = () => {
    setTodo(Todo.filter( (eachOne) => each.id !== eachOne.id ));
};
    return(
        <div className= {`todo-div ${each.checked ? "checked" : ""}`}>
            <div className= "todo-item">{text}</div>
            <button onClick= {checkBtnHandler} className= "check-btn">-</button>
            <button onClick= {deleteBtnHandler} className= "trash-btn">X</button>
        </div>
    );
}

export default Todo;