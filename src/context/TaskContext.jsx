import {createContext, useState, useEffect} from 'react'
import {tasks as data} from "../tasks"

export const TaskContext = createContext()


export const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([])

  function createTask(t, d){
    setTasks([...tasks, {
              title: t,
              id: tasks.length,
              description: d
    }])
        
}

    const deleteTask = (taskId) => {
   console.log(taskId);
   setTasks(tasks.filter((task) => task.id !== taskId ))
  }

  useEffect(() => {
    setTasks(data)
},[])

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext