import React from 'react';

export default function SubscribeView() {


	return (
		<div className="subscribe-view">
			<h3>Special <span>Offers</span> for Subscription</h3>
			<h1>GET INSTANT DISCOUNT FOR MEMEBERSHIP</h1> 
			<p className="text-thin">Subscribe our newsletter and get all latest news abot about latest
				products, promotions, offers and discount
			</p>
			<div className="subscribe-form">
				<input type="email" placeholder='Enter your email here'></input>
				<div id='subscribe-btn'>SUBSCRIBE</div>
			</div>
		</div>

	)
}