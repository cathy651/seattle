import React, {useEffect, useState } from 'react'
import foods from '../data/dishes.json';
import menus from '../data/menu.json'
const useDishes = () => {
    const [dishes, setDishes] = useState({});
    const [menuList, setMenuList] = useState({});
    useEffect(()=>{
        setDishes(foods.dishes);
        setMenuList(menus.menu);
    },[]);
    
  return {
      dishes,
      menuList
  }
  
}


export default useDishes