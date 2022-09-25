import React from 'react'
import DishCard from '../DishCard/DishCard'
import useDishes from '../../hooks/useDishes'
import { Style } from '@mui/icons-material';
import styles from './AllDishes.module.css'

const AllDishes = () => {
  const {dishes, menuList} = useDishes();

 if(dishes.length > 0 && menuList.length > 0) {
  return (
    <>
    {(dishes.length <= 0 || menuList.length <= 0) && <p>there is no content</p> }
    <div>
      {menuList && 
        menuList.map((item, index)=>{
          return(
            <div key={index}>
              <div>{item.type}</div>
              <div className={styles.foodSubBox}>
                {
                  dishes.filter((dish)=>{
                    return dish.type === item.type
                  }).map((food, index)=>{
                    return(<div key={index}><DishCard food={food}/></div>)
                  })
                }
              </div>
            </div>
        )
        })
      }
    </div>
    </>
  )
 }
}

export default AllDishes