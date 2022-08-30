import { useContext }from 'react'
import { TaskContext } from './context/TaskContext'

const TaskCard = ({t}) => {

  const {deleteTask} = useContext(TaskContext)
  
  return (
          <div className="bg-gray-400 text-white p-6 rounded-md" > 
              <h1 className="text-xl font-bold capitalize">  {t.title} </h1>
               <p className='text-gray-600 text-sm'> {t.description} </p>
               <button className='bg-blue-900 px-2 py-1 rounded-md mt-4 hover:bg-blue-800'  onClick={() =>  deleteTask(t.id)} > DELETE </button>
          </div>
   )
}

export default TaskCard

