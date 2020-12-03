import React from 'react';

const Card = ({index, props}) => {
    const { name, productImageUrl, productImageAltText, price } = props;
    const itemPrice = price.formattedValue;
    const itemCurrency = price.currency;
    
     return (
        <div id={`card-${index}`} className="card">
             <img src={productImageUrl} alt={productImageAltText}/>
             <div className="index">
                 <p>
                     {name}
                 </p>
                 <p>
                     {itemCurrency + " " + itemPrice}
                 </p>

             </div>git 
         </div>
     )
};

export default Card;