import clsx from 'clsx'
import { useState } from 'react'


import TableNameComponent from './TableNameComponent'

import styles from './Nav.module.css'
import WorkDetail from './WorkDetail'


function MainWork() {
  const [addTable, setAddTable] = useState(false);

  return (
    <div>
      <div className={styles.text}>Danh sách công việc</div>

      <div className={styles.mainWork}>


        <TableNameComponent />
      </div>
    </div>
  )
}
export default MainWork;