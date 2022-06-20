import { useState,useRef,useEffect} from 'react'
import styles from './MainWork.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faAlignLeft,faPen,faWindowClose, faTimes } from '@fortawesome/free-solid-svg-icons'
import WorkDetail from './WorkDetail'

 function TableWork ({children}){
     const [card,setCard] = useState('');
     const [detail,setDetail] = useState('');
     const [showDetail,setShowDetail] = useState(false);
     const [ listCard,setListCard] = useState(()=>{
      const jsonCards =JSON.parse(localStorage.getItem("listCard"+children.index));
      return jsonCards?jsonCards.list:[];
     });
     const [editing,setEditing] = useState(null);
     const [editingText,setEditingText] =useState([]);
    const refItem = useRef();
 
useEffect(()=>{
  const arr = [
    {
      id:children.index,
      list:listCard,
    }
  ]
  for(let i =0; i<arr.length;i++){
    const  jsonCards = JSON.stringify(arr[i])
    localStorage.setItem("listCard"+arr[i].id, jsonCards) 
  }
},[listCard])

const handelCard = () => {
  setListCard(prev=>[...prev,card])
  setCard('');
  refItem.current.focus();
}
const deleteTableWork = (index) =>{
  if(window.confirm("Bạn có muốn xóa")){
    const updateTableWork = [...listCard].filter((tableWork,i)=>i !== index)
    setListCard(updateTableWork);
}
}
    const editTableWork = (index) =>{
      const updateTableWork = [...listCard].map((name,id)=>{
        if(id === index){
            name = editingText
        }
        return name;
      })
      setListCard(updateTableWork);
      setEditing(null);
      setEditingText("");
    }
   
    const showDetailWork = (index) =>{
      setDetail(listCard[index])
      setShowDetail(e => !e)
        }
     return(
        <div className={styles.tableWork} >
                   <input 
            className={styles.title} 
            value={children.name}
            onChange={e=>{}}
              />
          
            <div> 
       {
         listCard.map((name,index)=>(
           <div className={styles.nameWork} key={index}>
           <div className={styles.editName}>
          
            {editing === index ? (
            <div style={{display:'flex'}}>
            <textarea
            className={styles.editText}
            type="text" 
            onChange={(e)=> setEditingText(e.target.value)}
            value={editingText}
            >
            </textarea>
            <button className={styles.btnEdit} onClick={()=>editTableWork(index)}>Edit</button>
            </div>
            ):(    <div
             className={styles.name}
            >{name}  
                 
                  <div>
                  <span onClick={()=>setEditing(index)}  className={styles.iconEdit}> <FontAwesomeIcon icon={faPen}/></span>
        <span > 
           <FontAwesomeIcon onClick = {()=>showDetailWork(index)} className={styles.iconNameWork} icon={faEye} /></span>   
           <FontAwesomeIcon className={styles.iconNameWork} icon={faAlignLeft} />
           <FontAwesomeIcon onClick={()=>deleteTableWork(index)} className={styles.iconClose} icon={faWindowClose} />
           </div>
        
             </div>  
             
            )}
                 
           </div>  
      
       </div>
           ))
                  }
       <div style={{marginTop:"20px"}}>
      <textarea  
      ref={refItem}
      className={styles.addCard}
      type="text"
      value={card}
      placeholder="➕ Thêm thẻ"
      maxLength="200"
      onChange={e=>{setCard(e.target.value)}}
      >
          </textarea >
      <div> <button onClick={handelCard}  className={styles.btnAddList}>Thêm thẻ</button></div>   
      </div>
      </div>
      {showDetail?<WorkDetail children={{id:children.index,name:detail}} />:null}
      </div>
        )
}

export default TableWork;