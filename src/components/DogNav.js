import React from 'react'
import { NavLink } from 'react-router-dom'

function DogNav({ dogs }) {
	const dogLinks = () => {
		return dogs.map((dog) => (
			<NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
				{dog.name}
			</NavLink>
		))
	}

	return (
		<nav>
			<NavLink exact to='/dogs'>
				Home Page
			</NavLink>
			{dogLinks}
		</nav>
	)
}

export default DogNav
