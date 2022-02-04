import Task from "./Task";
import { NoTasks } from "../styles/NoTasks";

const TaskList = ({ tasks, setTasks, setEditTask, setIsFinished, isFinished }) => {
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
                    isFinished={isFinished}
                    setIsFinished={setIsFinished}
                  /> 
                </div>
            )) : <NoTasks>No hay tareas</NoTasks>
        }
      </>
  );
};

export default TaskList;
