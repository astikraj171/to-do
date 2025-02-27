// src/components/TodoItem.jsx
import React from 'react';
function TodoItem({task, deleteTask, ToggleCompleted}){
    function handleChange(){
        ToggleCompleted(task.id);
    }
    return(
        <div className='todo-item'>
            <input 
                type='checkbox'
                checked={task.completed}
                onChange={handleChange}
            />
            <p>{task.text}</p>
            <button onClick={()=>deleteTask(task.id)}>X</button>
        </div>
    );
}
export default TodoItem;