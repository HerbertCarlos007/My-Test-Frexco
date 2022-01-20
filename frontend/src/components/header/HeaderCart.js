import styles from '../styles/HeaderCart.module.css'
import teste from '../buttons/ButtonLess'
import {useState} from 'react'
import {MdDelete} from 'react-icons/md'
import Fruta from '../pages/Fruta'


function HeaderCart(){

    const [valor, setValor] = useState(0)

    function funcAumentar(){
        setValor(valor + 1)
    }

    function funcDiminuir(){
        setValor(valor - 1)
    }

    


    return(
    <div>
        <div className={styles.header_cart}>
                <label>Produto</label>
                <label>Quantidade</label>
                <label>Preço</label>
                <label>Total a pagar</label>
                <hr/>
    </div>
        <div className={styles.label_to_quantifier}>

            <label>{valor}</label>
            <button onClick={funcAumentar} className={styles.button_to_add}>+</button>
            <button onClick={funcDiminuir} className={styles.button_to_less}>-</button>
        </div>

            <div>
                <label className={styles.product}>Fruta</label>
                <label className={styles.price}>Valor</label>
                <label class={styles.total_pay}>Total</label>
                <label className={styles.delete_item}><MdDelete/></label>
                <label className={styles.clean_cart}>Limpar</label>
                <hr></hr>
            </div>
        </div>
        
    )
}

export default HeaderCart