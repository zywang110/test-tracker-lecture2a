/** 
 * A component that renders a list of tasks.
 */

import React from 'react';
import Task from './Task';
import Tasks from './Tasks';

interface TasksProps {
    tasks: Tasks;
}

// Display the tasks that are in the list.  the name and the status of the task.

const TasksComponent: React.FC<TasksProps> = ({ tasks }) => {
    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.getTasks().map((task) => (
                    <li key={task.name}>
                        {task.name} -{task.hours} - {task.status ? 'Complete' : 'Incomplete'}
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default TasksComponent;