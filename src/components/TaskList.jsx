import Task from "./Task";

const TaskList = ({ tasks, setTasks}) => {
  return (
      <>
        {
            tasks.length > 0 ?

            tasks.map( task => (
                <div key={task.id}> <Task task={task}/> </div>
            )) :
            'no hay tareas'
        }
      </>
  );
};

export default TaskList;
