import { useState } from "react";
import { TaskDiv } from "../styles/TaskDiv";
import { Buttons } from "../styles/Buttons";
import { Finish } from "../styles/Finish";

const Task = ({task, tasks, setTasks, setEditTask}) => {

    const [ taskFinished, setTaskFinished] = useState(false);

    const deleteTask = id => {
        const confirmTaskDelete = confirm('Estas segur@ que deseas eliminar la tarea ?');
        if(confirmTaskDelete) {
            const taskDelete = tasks.filter( task => task.id !== id);
            setTasks(taskDelete)
            return;
        }
    }

    // const finish = () => {
    //     if(!taskFinished) {
    //         setTaskFinished(true)
    //         return
    //     }

    //     setTaskFinished(false)
    // }

  return (
    <TaskDiv>
        <p>{task.task}</p>
        <div>
            { taskFinished && <Finish>Finalizada</Finish>}
            { !taskFinished && <Buttons type="button" onClick={ () => setTaskFinished(true) }>Finalizar</Buttons>}
            { !taskFinished &&  <Buttons type="button" onClick={ () => setEditTask(task) }>Editar</Buttons>}
            <Buttons type="button" onClick={ () => deleteTask(task.id) }>Borrar</Buttons>
        </div>
    </TaskDiv>
    );
};

export default Task;
