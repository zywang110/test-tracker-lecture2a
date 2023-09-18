import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';
import Tasks from './Tasks';
import TasksComponent from './TasksComponent';



const tasks = new Tasks();
tasks.addTask('learn React', 'learn this new thing', false, 0);
tasks.addTask('learn React2', 'learn this new thing2', false, 1);

function App() {

  const [tasksCompleted, setTasksCompleted] = React.useState(0);
  const [taskCount, setTaskCount] = React.useState(0);

  React.useEffect(() => {
    setTaskCount(tasks.getTasks().length);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {tasksCompleted}
        <TasksComponent tasks={tasks} />
      </header>

    </div>
  );
}

export default App;
