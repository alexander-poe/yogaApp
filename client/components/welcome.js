import React from 'react'
import { Link } from 'react-router'

class Welcome extends React.Component {

	render() {
		return(
			
			<div>
				<Link to='/8minuteYoga'>
					<p> Hello </p>
				</Link>	

			</div>
			
			)
	}
}

export default Welcome;