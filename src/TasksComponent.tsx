/** 
 * A component that renders a list of tasks.
 */

import React from 'react';
import Task from './Task';
import Tasks from './Tasks';

interface TasksProps {
    tasks: Tasks;
    incrementTime: (taskName: string) => void;
}



// Display the tasks that are in the list.  the name and the status of the task.
// have a button to add one hour to the task.  the call back will be in the parent component.
const TasksComponent: React.FC<TasksProps> = ({ tasks, incrementTime }) => {

    // callback for the button to add an hour to the task.
    // the parameter is the event
    // the event.target is the button

    function addHour(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log(event.target);
        let taskName = event.currentTarget.id;
        console.log(taskName);
        incrementTime(taskName);

    }

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.getTasks().map((task) => (
                    <li key={task.name}>
                        {task.name} -{task.hours} - {task.status ? 'Complete' : 'Incomplete'}
                        <button id={task.name} onClick={addHour}>{"Add One Hour"}</button>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default TasksComponent;