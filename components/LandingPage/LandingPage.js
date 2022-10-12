import React from 'react'
import Link from "next/link"
import GlobalState from '../../context/GlobalState'
import styles from './LandingPage.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.wapper}>
       <GlobalState>
         <div className={styles.text}>
            <h2>Welcome</h2>
            <p>Enjoy your food, enjoy your life.</p>
            <button type="button" className={styles.button}>
              <Link href={"/food-galary"}>
              Click me
              </Link>
            </button>
         </div>  
       </GlobalState>
    </div>
  )
}

export default LandingPage