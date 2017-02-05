import React from 'react'
import { Link } from 'react-router'

class Welcome extends React.Component {

	render() {
		return(		
			<div className="container">
				<div className="introBox">
					<Link to='/8minuteYoga'>
						<p> Hello </p>
					</Link>	
				</div>
			</div>
			
			)
	}
}

export default Welcome;