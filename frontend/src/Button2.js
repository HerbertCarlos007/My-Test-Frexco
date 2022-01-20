import styles from './Button2.module.css'
import {useState} from 'react'

function Button2(){

    const [valor, setValor] = useState(0)


    function funcAumentar(){
        setValor(valor +1)
    }

    function funcDiminuir(){
        setValor(valor -1)
    }

    return(
        <div>
        <button onClick={funcAumentar} className={styles.btn1}>+</button>
        <button onClick={funcDiminuir} className={styles.btn2}>-</button>
        <span className={styles.contador}>{valor}</span>
        </div>
    )
}

export default Button2
