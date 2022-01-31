import { useState } from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';
import { Container } from './styles/Container';

function App() {

  const [ tasks, setTasks ] = useState([]);

  return (
    <Container>
      <h1>TODO-LIST</h1>
      <Form
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
    </Container>
  )
}

export default App
