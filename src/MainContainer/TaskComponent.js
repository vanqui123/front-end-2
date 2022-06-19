import { useState } from "react";
import styles from "./MainWork.module.css";

export const TaskComponent = ({ children }) => {
  const [task, setTask] = useState(children.name);
  const [save,setSave] = useState(false)
  const [listWorkDescription,setListWorkDescription] = useState(()=>{
    const ThingToDo = JSON.parse(localStorage.getItem("ThingToDo"+children.nameWork+children.idWork))
    return ThingToDo?(ThingToDo):([])
  })
const handleTask = (e) => {
    setSave(true)
    setTask(e.target.value)
}
const editTableWork = (index) =>{
    const updateTableWork = [...listWorkDescription].map((name,id)=>{
      if(id === index){
          name = task
      }
      return name;
    })
    setListWorkDescription(updateTableWork);
    const ThingToDo = JSON.stringify(updateTableWork)
    localStorage.setItem("ThingToDo"+children.nameWork+children.idWork,ThingToDo) 
    setSave(e=>!e)
  }

  return (
    <div>
      <input
        className={save?styles.task:styles.afterSave}
        value={task}
        onChange={handleTask}
      />
      <br/>
       {save ?<button  onClick={()=>editTableWork(children.id)} className={styles.buttonSave}>Save</button>:null }
    </div>
  );
};
