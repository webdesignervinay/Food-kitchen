import React from 'react';
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <div className="heading">
            <h1> <span>Welcome to Food's</span> <span>Kitchen</span> </h1>
            <Link to="/products">Go to menu</Link>
        </div>
    )
}
export default Home;