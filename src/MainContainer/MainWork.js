import clsx from 'clsx'
import {useState} from 'react'


import TableNameComponent from './TableNameComponent'

import styles from './Nav.module.css'
import WorkDetail from './WorkDetail'


function MainWork(){
 const [addTable,setAddTable] = useState(false);

    return(
        <div className={styles.mainWork}>

            
        <TableNameComponent />
      </div>
    )
}
export default MainWork;