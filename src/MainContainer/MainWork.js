import clsx from 'clsx'
import {useState} from 'react'


import TableNameComponent from './TableNameComponent'
import SlectedNavComponent from './SlectedNavComponent'
import styles from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function MainWork(){
 const [addTable,setAddTable] = useState(false);

    return(
        <div className={styles.mainWork}>

            
        <TableNameComponent />
        
      
      </div>
    )
}
export default MainWork;