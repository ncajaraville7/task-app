import Task from "./Task";
import { NoTasks } from "../styles/NoTasks";

const TaskList = ({ tasks, setTasks, setEditTask }) => {
  return (
      <>
        {
            tasks.length > 0 ?

            tasks.map( task => (
                <div key={task.id}> 
                  <Task 
                    task={task} 
                    tasks={tasks} 
                    setTasks={setTasks}
                    setEditTask={setEditTask}
                  /> 
                </div>
            )) : <NoTasks>No hay tareas</NoTasks>
        }
      </>
  );
};

export default TaskList;
