import { useState } from "react";
import Error from './Error';
import { InputTask } from "../styles/InputTask";
import { ButtonAdd } from "../styles/ButtonAdd";

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

                        <ButtonAdd 
                            type="submit"
                        >
                            Agregar Tarea
                        </ButtonAdd>
                </div>
            </form>

            {error && <Error>No has escrito nada</Error>}
        </>
    );
};

export default Form;
