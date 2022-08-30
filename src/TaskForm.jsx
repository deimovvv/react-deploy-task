import { useState, useContext } from "react"
import {TaskContext} from './context/TaskContext'

const TaskForm = () => {
 
   const [title, setTitle]  = useState("")
   const [description, setDescription] = useState("")
   const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title, description)

        setTitle('')
        setDescription('')
    }

  return (
     <div className="max-w-md mx-auto">
           <form onSubmit={handleSubmit} className="bg-neutral-700 p-10 mb-4">  
           <h1 className="text-2xl font-bold text-white mb-3">Add your task</h1>
             <input placeholder="Escribe tu tarea"
                 onChange={(e) => setTitle(e.target.value)  }  
                 value={title} className="bg-neutral-200 p-2 w-full mb-2" />
                 <textarea placeholder="Escribe descripcion de tarea"   onChange={(e) => setDescription(e.target.value)}
                 value={description}
                 className="bg-neutral-200 p-3 w-full mb-2"
                 >
                   
                 </textarea>
        <button className="bg-blue-900 text-white px-3 py-3 rounded-md hover:bg-blue-800">
            Guardar
        </button>
           </form>
     </div>
  )
}

export default TaskForm


