import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Products extends Component {
  render() {
    return (
    	<div className = "container">
    		<div className = "mainTitle">
    			<h1>Product Catalog</h1>
    		</div>
    		<div className = "productContainer">
    			<div className = "cigars">
    				<Link to="/Products/Cigars">
    				<div className = "cigarProduct">
	    				<h3 className="productLink">Cigars</h3>
	    				<img src="images/cigarpics/cigars1.jpg" />
    				</div>
    				</Link>
    			</div>
    			<div className = "hats">
    				<Link to="Products/Hats">
    				<div className = "hatsProduct">
	    				<h3 className="productLink">Hats</h3>
	    				<img src="images/hatpics/hat1.jpg" />
    				</div>
    				</Link>
    			</div>
    			<div className = "canes">
    				<Link to="Products/Canes">
    				<div className = "canesProduct">
	    				<h3 className="productLink">Canes</h3>
	    				<img src="images/canepics/cane1.jpg" />
    				</div>
    				</Link>
    			</div>
    		</div>
    	</div>      
    )
  }
}

export default Products