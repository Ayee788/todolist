    import React, {useState} from 'react'

    const Task = (props) => {
        const {list, setList} = props;
        const deleteTask = (e, index) => {
            setList(list.filter((task) => list.indexOf(task) !== index));
        }

        const completeTask = (e) => {
            const tasks = [...list];
            tasks[e.target.value].isComplete = true;
            setList(tasks);
        }
    return (
        <div>
        {list.map((task, index) => {
            const taskStyle = {
                textDecoration: task.isComplete ? 'line-through' : 'none'
            }
            if (task.isComplete) {
                taskStyle.textDecoration = 'line-through';
            }
            return (
                <div key={index}>
                    <p style={{textDecoration: task.isComplete ? 'line-through' : 'none'}}>{task.name}</p>
                    <label style={{textDecoration: task.isComplete ? 'line-through' : 'none'}}>Complete</label>
                    <input  type="checkbox" value={index} onClick={completeTask} complete = "Complete"/>
                    <button value={index} onClick={(e) => deleteTask(e,index)}>Delete</button>
                </div>
            );
        })}
        </div>
    );
}

    export default Task