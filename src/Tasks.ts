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
    tasks: Map<string, Task>;

    constructor() {
        this.tasks = new Map<string, Task>();
    }

    addTask(name: string, description: string, status: boolean, hours: number) {
        // add the task if a task with the same name does not exist
    }

    getTasks(): Task[] {
        //return a list of all the tasks
    }

    getTask(name: string): Task | undefined {
        // return the task if it exists
    }

    deleteTask(name: string) {
        // remove the task if it exists
    }

    updateTask(name: string, description: string, status: boolean, hours: number) {
        // update the task if it exists
    }
}

export default Tasks;
