import { TaskDiv } from "../styles/TaskDiv";
import { Buttons } from "../styles/Buttons";

const Task = ({task, tasks, setTasks, setEditTask}) => {

    const deleteTask = id => {
        const confirmTaskDelete = confirm('Estas segur@ que deseas eliminar la tarea ?');
        if(confirmTaskDelete) {
            const taskDelete = tasks.filter( task => task.id !== id);
            setTasks(taskDelete)
            return;
        }
        
    }

  return (
    <TaskDiv>
        <p>{task.task}</p>
        <div>
            <Buttons type="button">Finalizar</Buttons>
            <Buttons type="button" onClick={ () => setEditTask(task) }>Editar</Buttons>
            <Buttons type="button" onClick={ () => deleteTask(task.id) }>Borrar</Buttons>
        </div>
    </TaskDiv>
    );
};

export default Task;
