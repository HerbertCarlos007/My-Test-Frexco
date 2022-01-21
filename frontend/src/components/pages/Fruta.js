
import ButtonMore from '../buttons/ButtonMore'
import ButtonLess from '../buttons/ButtonLess'
import ButtonAdd from '../buttons/ButtonAdd'
import Tooltip from '@mui/material/Tooltip';
import styles from '../styles/Fruta.module.css'
import cesto_frutas from '../img/cesto_frutas.png'
import api from '../../api'
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
  }


  function generateRandomNumbers() {
    let random = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    return String(random).replace('.', ',')
  }

  const addToCart = (fruit) => {

    const fruits = [fruit]
    const stringfiedFruits = JSON.stringify(fruits);
    localStorage.setItem('cartFruits', stringfiedFruits);

  }



  return (

    <div >
      {lista.map((fruta) =>

        <Tooltip  title={`Carbohydrates: ${fruta.nutritions.carbohydrates}
                       Protein: ${fruta.nutritions.protein}
                        Fat: ${fruta.nutritions.fat} 
                        Calories: ${fruta.nutritions.calories}
                         Sugar: ${fruta.nutritions.sugar}`

        }>
          <div className={styles.container}>
            <ul>

              <li>{fruta.name}</li>
              <li>Kg</li>
              <li>R$:{generateRandomNumbers()}</li>
              <img src={cesto_frutas} alt='Cesto de frutas' />
            </ul>
            <hr />
            <button className={styles.button} onClick={() => addToCart(fruta)}>Adicionar</button>
          </div>
        </Tooltip>
      )}


    </div>

  )
}


export default Fruta