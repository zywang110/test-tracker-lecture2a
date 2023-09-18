/**
 * @file Tasks.ts
 * 
 * A class that will store the tasks.  
 * each class has a name, a description and a status.
 * it also has the number of hours it has been worked on
 * 
 */

import Task from './Task';


class Tasks {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(name: string, description: string, status: boolean, hours: number) {
        // add the code to add a new task to the tasks array
    }

    getTasks() {
        return this.tasks;
    }

    getTask(name: string): Task | undefined {
        // find the task with the given name and return it
        // if it is not there, return undefined

        return undefined;
    }

    deleteTask(name: string) {
        // delete the task with the given name
        // write a message to console.log if it is not there.
    }

    updateTask(name: string, description: string, status: boolean, hours: number) {
        // update the task with the given name
        // write a message to console.log if it is not there.
    }

    getTasksJSON() {
        return JSON.stringify(this.tasks);
    }
}

export default Tasks;
