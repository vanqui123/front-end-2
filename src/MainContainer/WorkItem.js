import { useState, useEffect } from "react";
import styles from "./MainWork.module.css";
import CheckBoxComponent from './CheckBoxComponent'

function WorkItem({ children }) {
  const [workItem, setWorkItem] = useState("");
  
  const [listWorkItem, setListWorkItem] = useState(() => {
    const workItems = JSON.parse(
      localStorage.getItem(
        "workItems" + children.name + children.nameTable + children.id
      )
    );
    return workItems ? workItems : [];
  });
  console.log(listWorkItem.length);
  const [showAdd, setShowAdd] = useState(true);

  const handelWorkItem = () => {
    setListWorkItem((prev) => {
      const work = [...prev, workItem];
      const workItems = JSON.stringify(work);
      localStorage.setItem(
        "workItems" + children.name + children.nameTable + children.id,
        workItems
      );
      return work;
    });
    setWorkItem("");
    setShowAdd(true);
  };
  return (
    <div>
      <div>
        {listWorkItem.map((name, index) => (
          <div style={{ display: "flex" }} key={index}>
               <CheckBoxComponent key={index} children={{name:name,id:index}} />
          
          </div>
        ))}
      </div>
      {showAdd ? (
        <button
          onClick={() => setShowAdd((e) => !e)}
          className={styles.btnAddList}
        >
          Thêm một mục
        </button>
      ) : (
        <div>
          <input
            value={workItem}
            style={{ width: "75%", height: "50px" }}
            type="text"
            onChange={(e) => {
              setWorkItem(e.target.value);
            }}
          />
          <br />
          <button onClick={handelWorkItem} className={styles.btnAddList}>
            Thêm
          </button>
        </div>
      )}
    </div>
  );
}
export default WorkItem;
