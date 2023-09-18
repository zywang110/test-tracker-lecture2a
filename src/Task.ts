// Purpose: Defines the Task class.
class Task {
    name: string;
    description: string;
    status: boolean;
    hours: number;

    constructor(name: string, description: string, status: boolean, hours: number) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.hours = hours;
    }
}

export default Task;