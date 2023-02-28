import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function numberWithCommas(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function mrp(price)
{
  let new_mrp = (price*1.3).toFixed(2);
  let mrp_format = numberWithCommas(new_mrp);
  return mrp_format;
}



const Product = ({ product }) => {
  
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div' >
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} review`}/>
        </Card.Text>

        <Card.Text as='h3' styles=" padding-bottom:0px"><strong>₹{numberWithCommas(product.price)}</strong></Card.Text>
        <div className='mrp_on_card'>₹{mrp(product.price)}</div> 
      </Card.Body>
    </Card>
  )
}

export default Product