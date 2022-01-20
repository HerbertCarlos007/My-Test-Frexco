import styles from '../styles/Header.module.css'
import logo from '../img/logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header(){

    return(
        <div>
            <header className={styles.header}>
                <img src={logo} alt='Logo'></img>
                
                

            </header>
        </div>
    )
}

export default Header