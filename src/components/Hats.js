import React, { Component } from 'react'
import { hatData } from './data'

class Hats extends Component {
  render() {
    return (
    	<div className="container">
	      	<div className="mainTitle">
	      		<h1>Hats</h1>
	      	</div>    	
	      	<div className="products">
	      		{hatData.map((item) => (
	      			<div className="productItem" key={item.productid}>
	      			<img src={item.picture}/>
	      			<h3>{item.name}</h3>
	      			<span>Price: {item.price}</span>
	      			<span>Product Id: {item.productid}</span>
	      			</div>
	      		))}
	      	</div>
	    </div>   
    )
  }
}

export default Hats