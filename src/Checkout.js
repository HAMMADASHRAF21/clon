import React from 'react'
import './Checkout.css'
import banner from "./amazonBanner.jpg";
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">


        
            <img className="checkout__ad"  src={banner} alt="ad" />
      {
   basket?.length === 0 ?
   (
    <div>
    <h2>Your Shopping Basket is empty</h2>
    <p>
							Your Shopping Cart lives to serve. Give it purpose — fill it with
							books, CDs, DVDs, toys, electronics, and more. Continue shopping
							on the Amazon.com homepage, learn about today's deals, or visit
							your Wish List.
						</p>
           </div>
   ) :
   (
       <div>
<h2 className="checkout__title"> Your Shopping Basket</h2>
{basket?.map(item =>
    <CheckoutProduct 
   // key={Math.random()}
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
    
    />
    
    )}


       </div>
   )

      }  
</div>
{basket.length > 0 && 
(
<div className="checkout__right">
    
<Subtotal />
    </div>

)




}


        </div>
    );
}

export default Checkout
