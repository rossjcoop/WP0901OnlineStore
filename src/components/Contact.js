import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
    	<div className="container">
	      	<div className="mainTitle">
	      		<h1>Contact Us</h1>
	      	</div>
	      	<div className="contact">
	      		<div className="contactImg">
	      			<img src="/images/oldtimepeople2.jpg" />
	      		</div>
	      		<div className="contactInfo">
		      		<h1>Gentlemen's Emporium</h1>
		      		<h1>2 Olde Tyme Gent Ln</h1>
		      		<h1>Hartford, CN 02795</h1>
		      		<h1>KL5-5402</h1>
		      		<a href="http://www.facebook.com/gentsemporium">
		      			<img src="/images/facebookwood.png" />
		      		</a>
		      		<a href="mailto:info@gentsemporium.com">
		      			<img src="/images/emailwood.png" />
		      		</a>
	      		</div>
	      	</div>
      	</div>  
    )
  }
}

export default Contact