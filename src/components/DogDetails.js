import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function DogDetails({ dogs }) {
	const { name } = useParams()
	const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase())

	const dogFacts = () => {
		return dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)
	}

	return (
		<div>
			<img src={dog.src} alt='Dog' />
			<p>
				<b>{dog.name}</b>
			</p>
			<p>{dog.age} yrs old</p>
			<ul>{dogFacts()}</ul>
			<NavLink to='/dogs'>Back</NavLink>
		</div>
	)
}

export default DogDetails
