import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from './context/TaskContext'


export function TaskList () {

  const {tasks } = useContext(TaskContext)

  return (
    tasks.length === 0 ? <h1 className="text-gray-600f text-2xl font-bold text-center"> There is no task</h1> :
    <div className="grid grid-cols-4 gap-2 p-4">
        {tasks.map((t) => (
             <TaskCard key={t.id} t={t} />
        ) )}
    </div>
  )
}

