import styles from '../styles/HeaderCart.module.css'
import { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import Fruta from '../pages/Fruta'

function HeaderCart() {

    const [products, setProducts] = useState([])

    const [quantity, setQuantity] = useState(1)

    const [totalToPay, setTotalToPay] = useState(0.0)

    useEffect(() => {

        getProductsFromLocalstorage()

    }, [])

    const valueTotalToPay = (productsFromLocalstorage) => {

        if (localStorage.getItem('totalToPay')) {
            const totalToPayParsed = JSON.parse(localStorage.getItem('totalToPay'))
            setTotalToPay(totalToPayParsed);
        } else {
            let totalValueSum = 0;
            for (let i = 0; i <= productsFromLocalstorage.length; i++) {
                if (productsFromLocalstorage[i]) {
                   
                    const formattedPrice = String(productsFromLocalstorage[i].price).replace(',', '.');

                    totalValueSum += parseFloat(formattedPrice)
                    
                }


            }
            const totalValueSumWithComma = String(totalValueSum).replace('.', ',')
            setTotalToPay(totalValueSumWithComma) 
            localStorage.setItem('totalToPay', totalValueSumWithComma)

        }


    }



    const getProductsFromLocalstorage = () => {
        let productsFromLocalstorage = [];
        if (localStorage.getItem('cartFruits')) {
            productsFromLocalstorage = JSON.parse(localStorage.getItem('cartFruits'))
           
            const productsWithQuantities = productsFromLocalstorage.map(product => ({ ...product, quantity: 1 }))
    
            setProducts(productsWithQuantities)
          
            valueTotalToPay(productsWithQuantities)
        }
       
    }

    const inscreaseQuantity = (name) => {
        const productsArrayUpdated = products.map(product => {

            if (product.name === name) product.quantity = product.quantity + 1

            return product
        })
        setProducts(productsArrayUpdated)
    }

    const decreaseQuantity = (name) => {
        const productsArrayUpdated = products.map(product => {

            if (product.name === name && product.quantity > 1) {

                product.quantity = product.quantity - 1

            }

            return product
        })
        setProducts(productsArrayUpdated)
    }

    return (

        <div>
            <div className={styles.clean_cart}>Limpar</div>
            <br></br>
            <div className={styles.header_cart}>
                <label>Produto</label>
                <label>Quantidade</label>
                <label>Preço</label>
            </div>

            <div className={styles.cart_rows_wrapper}>
                {products.length && products.map((fruit) =>

                    <div className={styles.cart_row_container}>
                        <div className={styles.product_container}>
                            <label className={styles.product}>{fruit.name}</label>
                        </div>
                        <div className={styles.quantity_container}>
                            <div className={styles.buttons_container}>
                                <button onClick={() => decreaseQuantity(fruit.name)} className={styles.button_to_less}>-</button>
                                <button onClick={() => inscreaseQuantity(fruit.name)} className={styles.button_to_add}>+</button>
                            </div>
                            <div className={styles.product_quantity}>{Number(fruit.quantity)}</div>
                        </div>
                        <div className={styles.price_container}>
                            <label className={styles.price}>{fruit.price}</label>
                        </div>

                        <div className={styles.delete_container}>
                            <MdDelete className={styles.delete_item} />
                        </div>
                    </div>
                )}

                <div className={styles.total_to_pay_container}>
                    <span className={styles.total_to_pay_text}>Total a pagar:{' R$ ' + totalToPay}</span>
                </div>
            </div>

            {!products.length ? <h1 className={styles.cart_is_empty}>Carrinho vazio</h1> : ''}

        </div>


    )
}


export default HeaderCart