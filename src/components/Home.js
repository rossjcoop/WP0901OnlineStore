import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
    	<div className="container">
    		<div className="mainBody">
    			<div className="billboard">
    			<img src="/images/oldtimegents.jpg" alt="Olde Tyme Gents"/>
	    			<div className="billboardH">
		    			<h1>Welcome!</h1>
		    			<h3>Since 1910, we have been the purveyors of the galent gentleman. What makes a galent gentleman you may say? A fine cigar, a firm handshake, a prominent hat, and don't forget the cane, both utilitarian and stylish to make all those you meet never forget your name. </h3>    		
		    			<Link to="/Products" className="link">View Our Products</Link>
	    			</div>
    			</div>
    		</div>
    	</div> 
    )
  }
}

export default Home