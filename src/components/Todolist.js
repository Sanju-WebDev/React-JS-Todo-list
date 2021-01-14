import React from 'react';

//import Todo
import Todo from './Todo';

const Todolist = (props) => {
    return(
        <div id="todo-list">
            <ul className="list" id="todo-items">
                {props.filteredTodo.map( (each) => (                    
                    <Todo 
                        text= {each.text} 
                        key= {each.id}
                        each= {each}
                        Todo= {props.Todo} 
                        setTodo= {props.setTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Todolist;