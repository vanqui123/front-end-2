import { useState,useRef } from 'react'
import styles from'./Nav.module.css'
import stylesMain from'./MainWork.module.css'
import TableWork from './TableWorkComponent';




function TableNameComponent(){

const [hedTable,setHedTable] = useState([]);
const [nameTableChild,setNameTableChild] = useState('');
const [listNameTableChild,setListNameTableChild] = useState(()=>{
  const jsonTables = JSON.parse(localStorage.getItem("Table"))
  return jsonTables?(jsonTables):([]);
}
);

const refItem = useRef();

const handelAddNameTableChild = () =>{
    setListNameTableChild((prev)=>{
      const newTables = [...prev,nameTableChild];
       const jsonTables = JSON.stringify(newTables)
       localStorage.setItem("Table", jsonTables)
       return newTables;
     });
    setNameTableChild('');
    refItem.current.focus();
    
}
    return(
   
      <div>
        <div className={styles.selectTable}>
          
        </div>
            <div className={stylesMain.mainWork}>        
            <div className={stylesMain.tableChildren}>
        {
           listNameTableChild.map((name,index)=>(
        <TableWork children={{name,index}} key={index} />
            ))
        } 
           <div>
            <input 
            value={nameTableChild}
            ref={refItem}
            className={stylesMain.addNameTableInput}
             type="text"
             placeholder="Nhập tên danh sách ..."
            onChange={e=>{setNameTableChild(e.target.value)}}
          />
         <div> <button onClick={handelAddNameTableChild} className={stylesMain.btnAddList}>Thêm Danh Sách</button></div>
         </div>
            </div>
  
        </div>
        </div>
        
     
    )
}
export default TableNameComponent;