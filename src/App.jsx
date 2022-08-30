import { useState, useEffect } from "react"
import TaskForm from "./TaskForm"
import {TaskList} from "./TaskList"




function App(){


  

 return <div className="bg-zinc-300 h-screen" >  
      <div className="container mx-auto p-10">
      <TaskForm/>
       <TaskList />
      </div>
       
 </div>

}

export default App






