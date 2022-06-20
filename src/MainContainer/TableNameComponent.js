import { useState, useRef } from "react";
import styles from "./Nav.module.css";
import stylesMain from "./MainWork.module.css";
import TableWork from "./TableWorkComponent";

function TableNameComponent() {
  const [search, setSearch] = useState("");
  const [nameTableChild, setNameTableChild] = useState("");
  const [listNameTableChild, setListNameTableChild] = useState(() => {
    const jsonTables = JSON.parse(localStorage.getItem("Table"));
    return jsonTables ? jsonTables : [];
  });

  const refItem = useRef();
  const handelAddNameTableChild = () => {
    setListNameTableChild((prev) => {
      const newTables = [...prev, nameTableChild];
      const jsonTables = JSON.stringify(newTables);
      localStorage.setItem("Table", jsonTables);
      return newTables;
    });
    setNameTableChild("");
    refItem.current.focus();
  };
  return (
    <div>
      <div className={styles.titleSearch}>Tìm Kiếm Công Việc</div>
      <div className={styles.selectTable}>

        <div>
          <input className={styles.formSearch}
            type="search" placeholder="Search"
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
          />
        </div>
      </div>
      <div className={stylesMain.mainWork}>
        <div className={stylesMain.tableChildren}>
          {listNameTableChild.map((name, index) => (
            <div key={index} >

              <TableWork children={{ name, index }} key={index} />

              {search === name ? (
                <div className={styles.searchResult}>
                  <TableWork children={{ name, index }} />
                </div>
              ) : (null)}
            </div>

          ))}
          <div className={stylesMain.borderChildren}>
            <input
              value={nameTableChild}
              ref={refItem}
              className={stylesMain.addNameTableInput}
              type="text"
              placeholder="Nhập tên danh sách ..."
              onChange={(e) => {
                setNameTableChild(e.target.value);
              }}
            />

            <div>
              {" "}
              <button
                onClick={handelAddNameTableChild}
                className={stylesMain.btnAddList}
              >
               
                Thêm Danh Sách
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TableNameComponent;
