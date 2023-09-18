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
        if (this.tasks.has(name)) {
            return;
        }
        this.tasks.set(name, new Task(name, description, status, hours));
    }

    getTasks(): Task[] {
        let result = []
        for (let task of this.tasks.values()) {
            result.push(task)
        }
        return result;
    }

    getTask(name: string): Task | undefined {
        return this.tasks.get(name);
    }

    deleteTask(name: string) {
        if (this.tasks.has(name)) {
            this.tasks.delete(name);
        }
    }

    updateTask(name: string, description: string, status: boolean, hours: number) {
        const task = this.getTask(name);
        if (task) {
            task.description = description;
            task.status = status;
            task.hours = hours;
        }
    }
}

export default Tasks;
