import Header from '../Header'
import ButtonAdd from '../ButtonAdd'
import Button2 from '../Button2'
import Button3 from '../Button3'
import Tooltip from '@mui/material/Tooltip';
import styles from './Fruta.module.css'
import cesto_frutas from '../img/cesto_frutas.png'
import api from '../api'
import { useState } from 'react'
import React, { useEffect } from 'react'





function Fruta() {
    const [lista, setLista] = useState([])



    useEffect(() => {
        listarDados()
    }, [])

    async function listarDados() {
        const res = await api.get('/pegarFrutas')
        setLista(res.data)
        console.log(res.data)
    }

    
    function generateRandomNumbers(){
      let random =  Math.floor(Math.random() * (1000 - 100) + 100) / 100;
      return random
    }  
     
      

    return (
    

        <div className='container'>
      {lista.map((fruta) =>
        <div className={styles.container}>
          <ul>

            <li>{fruta.name}</li>
            <li>Kg</li>
            <li>R$:{generateRandomNumbers()}</li>

            <Tooltip title={`Carbohydrates: ${fruta.nutritions.carbohydrates}
             Protein: ${fruta.nutritions.protein}
              Fat: ${fruta.nutritions.fat} 
              Calories: ${fruta.nutritions.calories}
               Sugar: ${fruta.nutritions.sugar}`

            }>
              <img src={cesto_frutas} alt='Cesto de frutas' />

            </Tooltip>

          </ul>
          <hr />
         
          <ButtonAdd></ButtonAdd>
          <Button2></Button2>
          <Button3></Button3>
          

        </div>
      )}


    </div>

    )
}


export default Fruta