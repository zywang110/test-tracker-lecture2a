import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';
import Tasks from './Tasks';
import TasksComponent from './TasksComponent';



const tasks = new Tasks();
tasks.addTask('learn React', 'learn this new thing', false, 0);
tasks.addTask('learn React2', 'learn this new thing2', false, 0);

function App() {

  const [tasksCompleted, setTasksCompleted] = React.useState(0);
  const [taskCount, setTaskCount] = React.useState(0);

  function incrementTime(taskName: string) {
    // get the task
    let task = tasks.getTask(taskName);
    // increment the time
    task!.hours += 1;


    tasks.updateTask(task!.name, task!.description, task!.status, task!.hours);
    setTaskCount(taskCount + 1);
    //console.log(taskCount);
  }

  React.useEffect(() => {
    setTaskCount(tasks.getTasks().keys.length);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        Total Hours:{taskCount}
        <TasksComponent tasks={tasks} incrementTime={incrementTime} />
      </header>

    </div>
  );
}

export default App;
