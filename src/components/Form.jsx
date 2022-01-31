import { useState } from "react";
import Error from './Error';
import { Buttons } from "../styles/Buttons"
import { InputTask } from "../styles/InputTask";


const Form = ({ tasks, setTasks}) => {
    
    const [ task, setTask] = useState('');
    const [ error, setError ] = useState(false);
    
    const handleSubmit = e => {
      e.preventDefault();
      console.log(task)
      if(!task) {
          setError(true);
          return;
      }

      setError(false);

      const objTask = {
          id: Date.now(),
          task
      }

      setTasks([...tasks, objTask]);
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
                            value={task}
                            onChange={ e => setTask(e.target.value)} 
                        />

                        <Buttons type="submit"> Agregar Tarea </Buttons>
                </div>
            </form>

            {error && <Error>No has escrito nada</Error>}
        </>
    );
};

export default Form;
