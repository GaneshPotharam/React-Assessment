import React from 'react';
function Product(props) {
  return (
    <div className="product">
      <div className='img-wrapper'>
        <img className='product-image' src={props.image} alt={props.title} />
      </div>
      <div className='caption'>
        <strong className='title'>{props.title}</strong>
        <strong className='rating'>&#9733; {props.rating.rate}</strong>
      </div>

    </div>
  );
}

export default Product;
