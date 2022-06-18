import { useState } from "react";
import styles from "./MainWork.module.css";

export const TaskComponent = ({ children }) => {
  const [task, setTask] = useState(children);
  const [save,setSave] = useState(false)
const handalTask = (e) => {
    setSave(true)
    setTask(e.target.value)
}
// const editTableWork = (index) =>{
//     const updateTableWork = [...listCard].map((name,id)=>{
//       if(id === index){
//           name = editingText
//       }
//       return name;
//     })
//     setListCard(updateTableWork);
//     setEditing(null);
//     setEditingText("");
//   }
 
  return (
    <div>
      <input
        className={save?styles.task:styles.afterSave}
        value={task}
        onChange={handalTask}
      />
       {save ?<button  onClick={()=>setSave(e=>!e)} className={styles.buttonSave}>Save</button>:null }
    </div>
  );
};
