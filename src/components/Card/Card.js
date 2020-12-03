import React from 'react';

const openProductUrl = (url) => {
    window.open(url,  '_blank');
}


// Button's functionality needs to be fixed as the currect react one is poorly handling window.open()
const Card = ({index, props, url}) => {
    const { name, productImageUrl, productImageAltText, price} = props;
    const itemPrice = price.formattedValue;
    const itemCurrency = price.currency;
    
     return (
        <div id={`card-${index}`} className="card">
             <img src={productImageUrl} alt={productImageAltText}/>
             <div className="index">
                {name} <br/>
                <p>
                    {itemCurrency + " " + itemPrice} <br/>
                    <button onClick={openProductUrl(url)}>Shop now</button>
                </p>
             </div>
         </div>
     )
};

export default Card;