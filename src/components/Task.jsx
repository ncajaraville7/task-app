import { TaskDiv } from "../styles/TaskDiv";
import { Buttons } from "../styles/Buttons";
import { Finish } from "../styles/Finish";

const Task = ({task, tasks, setTasks, setEditTask }) => {

    const deleteTask = id => {
        const confirmTaskDelete = confirm('Estas segur@ que deseas eliminar la tarea ?');
        if(confirmTaskDelete) {
            const taskDelete = tasks.filter( task => task.id !== id);
            setTasks(taskDelete)
            return;
        }
    }

    const taskFinished = id => {
        const finishTask = tasks.map( item => {
            if(item.id === id) {
                item.isFinished = true
                return item
            }
            return item
        } )
        setTasks(finishTask);
    }

  return (
    <TaskDiv>
        <p>{task.task}</p>
        <div>
            { task.isFinished && <Finish>Finalizado</Finish>}
            { !task.isFinished ? <Buttons type="button" onClick={ () => taskFinished(task.id) }>Finalizar</Buttons> : '' }
            { !task.isFinished ? <Buttons type="button" onClick={ () => setEditTask(task) }>Editar</Buttons> : '' }
            <Buttons type="button" onClick={ () => deleteTask(task.id) }>Borrar</Buttons>
        </div>
    </TaskDiv>
    );
};

export default Task;
