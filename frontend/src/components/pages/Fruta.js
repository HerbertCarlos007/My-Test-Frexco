
import ButtonMore from '../buttons/ButtonMore'
import ButtonLess from '../buttons/ButtonLess'
import ButtonAdd from '../buttons/ButtonAdd'
import Tooltip from '@mui/material/Tooltip';
import styles from '../styles/Fruta.module.css'
import fruitsNest from '../img/cesto_frutas.png'
import api from '../../api'
import { useState } from 'react'
import React, { useEffect } from 'react'

function Fruta() {
  const [list, setList] = useState([])

  useEffect(() => {
    listarDados()
  }, [])

  async function listarDados() {

      if(localStorage.getItem('fruitsList')){
        const parseFruitsArray = JSON.parse(localStorage.getItem('fruitsList'))
        setList(parseFruitsArray)
      }else {
        const res = await api.get('/pegarFrutas')
        const stringfiedFruitArray  = JSON.stringify(res.data);
        localStorage.setItem('fruitsList', stringfiedFruitArray)
        setList(res.data)
      }
  }

  const addToCart = (fruit) => {

    if (!localStorage.getItem('cartFruits')) {
      const stringfiedFruit = JSON.stringify([fruit])
      localStorage.setItem('cartFruits', stringfiedFruit)
    } else {
      const fruitsFromLocalStorage = JSON.parse(localStorage.getItem('cartFruits'))
      fruitsFromLocalStorage.push(fruit)
      localStorage.setItem('cartFruits', JSON.stringify(fruitsFromLocalStorage))
    }
  }

  return (

    <div >
      {list.map((fruit) =>

        <Tooltip title={`Carbohydrates: ${fruit.nutritions.carbohydrates}
                       Protein: ${fruit.nutritions.protein}
                        Fat: ${fruit.nutritions.fat} 
                        Calories: ${fruit.nutritions.calories}
                         Sugar: ${fruit.nutritions.sugar}`

        }>
          <div className={styles.container}>
            <ul>

              <li>{fruit.name}</li>
              <li>Kg</li>
              <li>R$:{fruit.price}</li>
              <img src={fruitsNest} alt='Cesto de fruitas' />
            </ul>
            <hr />
            <button className={styles.button} onClick={() => addToCart(fruit)}>Adicionar</button>
          </div>
        </Tooltip>
      )}


    </div>

  )
}


export default Fruta