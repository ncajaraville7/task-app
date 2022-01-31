import { TaskDiv } from "../styles/TaskDiv";
import { Buttons } from "../styles/Buttons";

const Task = ({task, tasks, setTasks}) => {

    const deleteTask = id => {
        const taskDelete = tasks.filter( task => task.id !== id);
        setTasks(taskDelete)
    }

  return (
    <TaskDiv>
        <p>{task.task}</p>
        <div>
            <Buttons type="button">Finalizar</Buttons>
            <Buttons type="button" onClick={() => deleteTask(task.id)}>Borrar</Buttons>
        </div>
    </TaskDiv>
    );
};

export default Task;
