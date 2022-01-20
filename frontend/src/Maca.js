import styles from './Maca.module.css'
import maca from '../img/maca.jpg'

import ButtonAdd from './ButtonAdd'
import Button2 from './Button2'
import Button3 from './Button3'

function Maca(){

    return(
        <div className={styles.container}>
            <ul>
                <li>Abacate Comum</li>
                <li>Kg</li>
                <li>R$ 8,11</li>
                <img src={maca} alt='Abacate'/>

            </ul>
            <hr/>
            <ButtonAdd></ButtonAdd>
            <Button2></Button2>
            <Button3></Button3>
            
        </div>
    )
}

export default Maca