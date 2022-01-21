import styles from '../styles/HeaderCart.module.css'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'


function HeaderCart() {

    const [quantity, setQuantity] = useState(1)

    const [hasBoughtSomething, setHasBoughtSomething] = useState(true)

    const inscreaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
        if (quantity < 1) setQuantity(quantity + 1)
    }


    return (
        <div>
            <div className={styles.header_cart}>
                <label>Produto</label>
                <label>Quantidade</label>
                <label>Preço</label>
                <label>Total a pagar</label>
            </div>
            {
                hasBoughtSomething ? 
                <div className={styles.cart_rows_wrapper}>
                    <div className={styles.cart_row_container}>
                        <div className={styles.product_container}>
                            <label className={styles.product}>Fruta</label>
                        </div>
                        <div className={styles.quantity_container}>
                            <div className={styles.buttons_container}>
                                <button onClick={decreaseQuantity} className={styles.button_to_less}>-</button>
                                <button onClick={inscreaseQuantity} className={styles.button_to_add}>+</button>
                            </div>
                            <div className={styles.product_quantity}>{quantity}</div>
                        </div>
                        <div className={styles.price_container}>
                            <label className={styles.price}>Valor</label>
                        </div>
                        <div className={styles.total_pay_container}>
                            <label class={styles.total_pay}>Total</label>
                        </div>
                        <div className={styles.delete_container}>
                            <MdDelete className={styles.delete_item} />
                        </div>
                    </div>

                </div> : ''
            }

            {
                hasBoughtSomething ? <div className={styles.clean_all_cart_container}>
                    <label className={styles.clean_cart}>Limpar</label>
                </div> : <h1 className={styles.clean_all_text}>Carrinho vazio</h1>}


        </div>

    )
}


export default HeaderCart