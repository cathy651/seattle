import React from 'react'
import AllDishes from '../AllDishes/AllDishes'
import BusinessInfo from '../BusinessInfo/BusinessInfo'
import SideMenu from '../SideMenu/SideMenu'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import styles from './LandingPage.module.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GlobalState from '../../context/GlobalState'

const businessInfo = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const LandingPage = () => {
  return (
    <div className={styles.wapper}>
      <GlobalState>
       <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <SideMenu />
              </Grid>
              <Grid item xs={10}>
                <BusinessInfo post={businessInfo} />
                <ShoppingCart />
                <AllDishes />
              </Grid>
            </Grid>
        </Container>
      </GlobalState>
    </div>
  )
}

export default LandingPage