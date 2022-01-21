import styles from '../styles/ButtonMore.module.css'
import {Link } from 'react-router-dom'
function ButtonMore(){

    return(
        <div>
            <button type='submit' className={styles.btn}>Adicionar</button>
        </div>
    )
}

export default ButtonMore