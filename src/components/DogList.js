import React from 'react'
import { NavLink } from 'react-router-dom'

function DogList({ dogs }) {
	const list = () => {
		return dogs.map((dog) => (
			<div key={dog.name}>
				<NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
			</div>
		))
	}

	return (
		<div>
			<h2>Click on each dog for more info</h2>
			<div>{list()}</div>
		</div>
	)
}

export default DogList
