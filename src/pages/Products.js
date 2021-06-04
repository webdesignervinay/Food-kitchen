import React,{ useState } from 'react';
import Feeds from '../data/feeds';


const Products = () =>{
    const [added, setadded] = useState(false);
    return(

        <div className="container product-container-main">
            <div className="cart-block"><i class="fas fa-shopping-cart"></i> 
                <div className="number">
                      <span>2</span>
                 </div>
             </div>
            <div className="container product-container">
                {Feeds.map((feed,index)=>
                <div className="product-card" key={index}>
                     <img className="img-full" src={feed.image}/>
                        <div className="details"> 
                            <h2>{feed.name}</h2>
                            <p>{feed.price}</p>
                        </div>
                            <button className="blue" onClick={() => setadded(true)}><span className="plus">+</span></button>
                            <button className={added?"pink":"grey"} onClick={() => setadded(false)}><span className="minus">-</span></button>
                      
                </div>
                )}
            </div>
        </div>
        
    )
}
export default Products;