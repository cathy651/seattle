import React, {useContext} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from './DishCard.module.css'
import CartContext from '../../context/CartContext'

const DishCard = ({food}) => {

    return (
      <CartContext.Consumer>
        {context => (
          <Card className={styles.singleCard} sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <iframe 
                title="Fruit Tart" 
                frameBorder="0" 
                allowFullScreen mozallowfullscreen="true" 
                webkitallowfullscreen="true" 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                src={food.image}> 
              </iframe>
              <CardContent>
                <h2 className={styles.foodTitle}>
                  {food.title}
                </h2>
                <p>
                  $ {food.price}
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={context.addProductToCart.bind(this, food)} size="small" color="primary" variant="outlined">
                Like it
              </Button>
            </CardActions>
          </Card>
        )}
      </CartContext.Consumer>
        
      );
}

export default DishCard