import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/app.css';

class Baselayout extends Component {
  render() {
    return (
    	<div className = "layout">
    		<div className = "header">
    			<div className = "logo">
    				<h1>Gentleman's Emporium</h1>
    				<div className = "logoPic">
    					<img src="/images/twogents.png" />
    				</div>
    				<span>Cigars, Hats, Canes, Galentry.</span>    
    			</div>
    			<div className = "mainNav">
    				<nav>
    					<NavLink exact to="/" className="link">Home</NavLink>
    					<NavLink to="/About" className="link">About</NavLink>
    					<NavLink to="/Products" className="link">Products</NavLink>
    					<NavLink to="/Contact" className="link">Contact Us</NavLink>
    				</nav>
    			</div>
    		</div>

    		{this.props.children}

    		<div className = "footer">
    			<div className = "footNav">
    				<span>©2017 Gentleman's Emporium</span>
    				<nav>
    					<NavLink exact to="/" className="link">Home</NavLink>
    					<NavLink to="/About" className="link">About</NavLink>
    					<NavLink to="/Products" className="link">Products</NavLink>
    					<NavLink to="/Contact" className="link">Contact Us</NavLink>
    				</nav>
    			</div>
    			<div className = "footSocial">

    			</div>
    		</div>
    	</div>  
    )
  }
}

export default Baselayout