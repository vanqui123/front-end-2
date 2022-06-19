import { useState } from 'react'

import styles from './MainWork.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import WorkItem  from './WorkItem'
import { TaskComponent } from './TaskComponent'

function WorkDetail({children}){
    const [show,setShow] = useState(true)
    const [save,setSave] = useState(false)
    const [addWork,setAddWork] = useState(false)
    const [workDescription,setWorkDescription] = useState("")

    const [listWorkDescription,setListWorkDescription] = useState(()=>{
      const ThingToDo = JSON.parse(localStorage.getItem("ThingToDo"+children.name+children.id))
      return ThingToDo?(ThingToDo):([])
    })
 console.log('listWork',listWorkDescription);
    const [description,setDescription] = useState(()=>{
      const description=JSON.parse(localStorage.getItem("description"+children.name+children.id));
      return description?(description):("")}) 

    const handelDescription = (e) =>{
        setDescription(e.target.value)
        setSave(true)
        const  descriptionCard = JSON.stringify(description)
        localStorage.setItem("description"+children.name+children.id,descriptionCard) 
    }

    const handelWorkDescription = () => {
        setListWorkDescription((prev) => {
          const listWork =[...prev,workDescription]
        const ThingToDo = JSON.stringify(listWork)
        localStorage.setItem("ThingToDo"+children.name+children.id,ThingToDo) 
        return listWork;
         })
        setWorkDescription("");
        setAddWork(false);
    }
    const deleteTableWork = (index) =>{
      if(window.confirm("Bạn có muốn xóa")){
        const updateTableWork = [...listWorkDescription].filter((tableWork,i)=>i !== index)
        console.log(updateTableWork);
        setListWorkDescription(()=>{
          const ThingToDo = JSON.stringify(updateTableWork)
          localStorage.setItem("ThingToDo"+children.name+children.id,ThingToDo) 
          return updateTableWork;
        });
    }
  }
    return(
 
    show?
(<div className={styles.workDetail}>
        <div className={styles.headerDetail}>
        <h2  style={{margin:'0px'}}>{children.name}</h2> 
        <FontAwesomeIcon onClick={()=> setShow(e=>!e)}  className={styles.iconCloseDetail}  icon={faTimes} />  
      
        </div>
        <h3 >Mô tả</h3>
        <div style={{marginLeft:'30px',margintop: '-17px'}}>
        <input 
            className={save?styles.description:styles.afterSave}
            value={description}
             type="text"
             placeholder="    Mô tả chi tiết hơn...."
             onChange={handelDescription}
          /><br/>
        {save ?<button  onClick={()=>setSave(e=>!e)} className={styles.buttonSave}>Save</button>:null }
          </div>
       
      <div style={{  textAlign:'end'}}>
          <button onClick={()=>setAddWork(e=>!e)} className={styles.addWorkButton}>Việc cần làm</button>
            {addWork?
           (
         <div className={styles.addWork}>   
            <input 
            value={workDescription}
            className={styles.workInput}
            type="text"
            placeholder="Việc cần làm"
            onChange={e=>setWorkDescription(e.target.value)}
         />
         <button onClick={handelWorkDescription} className={styles.btnSaveWork}>Save</button>
         </div>
         ):null}
            </div>
            <div style={{marginTop: '-10px'}}>
            {listWorkDescription.map((name,index)=>(
              <div  key={index}>
                <TaskComponent children={{name:name,id:index,nameWork:children.name,idWork:children.id}} />
                <button onClick={()=>deleteTableWork(index)}>X</button>
                <WorkItem children={{id:children.id,name:name,nameTable:children.name}}/> 
                </div>
            ))}
          </div>
      <div>
      </div>
      </div>):(null)
    )

}
export default WorkDetail;