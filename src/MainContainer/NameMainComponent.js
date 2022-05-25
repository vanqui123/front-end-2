

import styles from './MainWork.module.css'

function NameMainComponent({children}){

    return(
        <div className={styles.nameMain}>
                <h2>{children}</h2>
        </div>
    )
}
export default NameMainComponent;