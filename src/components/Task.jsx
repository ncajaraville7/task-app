import { TaskDiv } from "../styles/TaskDiv";
import { Buttons } from "../styles/Buttons";
import { Finish } from "../styles/Finish";

const Task = ({task, tasks, setTasks, setEditTask, isFinished, setIsFinished }) => {

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
            { isFinished && <Finish>Finalizado</Finish>}
            { !isFinished ? <Buttons type="button" onClick={ () => setIsFinished(true) }>Finalizar</Buttons> : '' }
            { !isFinished ? <Buttons type="button" onClick={ () => setEditTask(task) }>Editar</Buttons> : '' }
            <Buttons type="button" onClick={ () => deleteTask(task.id) }>Borrar</Buttons>
        </div>
    </TaskDiv>
    );
};

export default Task;
