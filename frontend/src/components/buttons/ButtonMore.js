import styles from '../styles/ButtonMore.module.css'
import {Link } from 'react-router-dom'
function ButtonMore(){
    return(

        <Link to="/cart"><button type='submit' className={styles.btn}>Adicionar</button></Link>
    )
}

export default ButtonMore