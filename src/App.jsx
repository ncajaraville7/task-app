import { useState, useEffect } from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';
import { Container } from './styles/Container';
import { dateFormating } from './helpers/dateFormating';

function App() {

  const [ tasks, setTasks ] = useState([]);
  const [ editTask, setEditTask ] = useState({});

  useEffect( () => {
    const getLocalStorage = () => {
      const taskLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(taskLocalStorage);
    }
    getLocalStorage()
  }, [])

  useEffect( ()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <Container>
      <h1>TODO-LIST</h1>
      {dateFormating(Date.now())}
      <Form
        tasks={tasks}
        setTasks={setTasks}
        editTask={editTask}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setEditTask={setEditTask}
      />
    </Container>
  )
}

export default App
