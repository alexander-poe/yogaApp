import React from 'react'
import { Link } from 'react-router'

class Welcome extends React.Component {
	render() {
		return(		
			
			<div className="container">
				<div className="introBox">
					<h2 className="introTitle"> 8MinuteYoga </h2>
					<Link to="/8minuteYoga">
						<img src="pose1.png" />
					</Link>	
				</div>
			</div>
			
			)
	}
}
export default Welcome;