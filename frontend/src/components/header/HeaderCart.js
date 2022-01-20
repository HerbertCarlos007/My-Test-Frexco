import styles from '../styles/HeaderCart.module.css'
import teste from '../buttons/ButtonLess'

function HeaderCart(){

  
    return(
    <div>
        <div className={styles.header_cart}>
                <label>Produto</label>
                <label>Quantidade</label>
                <label>Preço</label>
                
                <hr/>
    </div>
        <div className={styles.label_to_quantifier}>

        <label>1</label>
        <button className={styles.button_to_add}>+</button>
        <button className={styles.button_to_less}>-</button>
        </div>
    </div>
        
    )
}

export default HeaderCart