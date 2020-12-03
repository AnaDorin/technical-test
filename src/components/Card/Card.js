import React from 'react';

const Card = ({index, props}) => {
    const { name, productImageUrl, productImageAltText } = props;
    const price = props.price.formattedValue;

     return (
         <div id={index}>
             <img src={productImageUrl} alt={productImageAltText}/>
             <div>
                 <p>
                     {name}
                 </p>
                 <p>
                     {price}
                 </p>
             </div>
         </div>
     )
};

export default Card;