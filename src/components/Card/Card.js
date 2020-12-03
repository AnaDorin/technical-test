import React from 'react';

const Card = ({index, props}) => {
    const { name, productImageUrl, productImageAltText } = props;
    const price = props.price.formattedValue;

     return (
        <div id={`card-${index}`} className="card">
             <img src={productImageUrl} alt={productImageAltText}/>
             <div className="index">
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