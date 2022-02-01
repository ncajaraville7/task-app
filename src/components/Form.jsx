import { useState, useEffect } from "react";
import Error from './Error';
import { Buttons } from "../styles/Buttons"
import { InputTask } from "../styles/InputTask";


const Form = ({ tasks, setTasks, editTask}) => {
    
    const [ task, setTask] = useState('');
    const [ error, setError ] = useState(false);

    //Detectamos cambios al dar click en editar y si hay algo para editar
    useEffect( ()=> {
        if(Object.keys(editTask).length > 0) {
            setTask(editTask.task)
            return;
        }
    }, [editTask])
    
    const handleSubmit = e => {
      e.preventDefault();

      if(!task) {
          setError(true);
          return;
      }

      setError(false);

      const objTask = {
          task
      }

      if(editTask.id) {
          objTask.id = editTask.id;

          const taskUpdate = tasks.map( taskState => taskState.id === editTask.id ? objTask : taskState);
          setTasks(taskUpdate)

      } else {
          objTask.id = Date.now();
          setTasks([...tasks, objTask]);
      }

      setTask('');
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                        <InputTask 
                            type="text" 
                            id="task"
                            autoFocus
                            value={task}
                            onChange={ e => setTask(e.target.value)} 
                        />

                        <Buttons 
                            type="submit"> { editTask.id ? 'Editar Tarea' : 'Agregar Tarea' } 
                        </Buttons>
                </div>
            </form>

            {error && <Error>No has escrito nada</Error>}
        </>
    );
};

export default Form;
