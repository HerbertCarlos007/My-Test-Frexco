import styles from './HeaderCart.module.css'

function HeaderCart(){

    return(
        <div className={styles.header_cart}>
            <header>
                <label>Produto</label>
                <label>Quantidade</label>
                <label>Preço</label>
            </header>
        </div>
    )
}

export default HeaderCart