import React,{ useState } from 'react';
import Feeds from '../data/feeds';


const Popup = () =>{
    const [added, setadded] = useState(false);
    return(
           <div className="popup-main">
               <div className="popup-innner">
                        <div className="cart-block"><i class="fas fa-shopping-cart"></i> 
                            <div className="number">
                                <span>2</span>
                            </div>
                        </div>
                        <h4>Order Summary</h4>
                        <div className="inner-content">
                                <div className="left-div">
                                    <p>Coke:  <span> 2 </span></p>
                                    <p>Fries:  <span> 1 </span></p>
                                    <p>Total (INR) : 200</p>
                                </div>
                                <div className="right-div">
                                <div className="inner-btn">
                                        <button className="plus-btn">+</button>
                                        <button className="minus-btn">-</button>
                                </div>
                                <div className="inner-btn">
                                        <button className="plus-btn">+</button>
                                        <button className="minus-btn">-</button>
                                </div>
                                </div>
                        </div>
                                   <div className="outr">
                                        <button className="checkout-btn" >Save and checkout</button>
                                        <button className="cancle-btn" >Cancle</button>
                                   </div>

                 </div>

            </div>
      
        
    )
}
export default Popup;