import React, { useState, useEffect } from 'react'

export const CharacterCard = () => {
	const [characterDetails, setCharacterDetails] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const data = await fetch('https://rickandmortyapi.com/api/character/')
			const character = await data.json()
			const details = await character.results
			setCharacterDetails(details)
			setLoading(false)
			console.log(details)
		}
		getData()
	}, [])

	return (
		<>
			{loading ? (
				<h2>Cargando</h2>
			) : (
				characterDetails.map(character => {
					const { name, status, location, species } = character
					return (
						<div key={character.id} className='character__card--container'>
							<figure>
								<img
									src={character.image}
									alt='Avatar Character'
									className='character__card--image'
								/>
							</figure>
							<div className='character__details--container'>
								<h2 className='Character__name'>{name}</h2>
								<h3 className='character__status'>{status}</h3>
								<h5 className='character__gray'>Ultima ubicación conocida:</h5>
								<h5>{location.name}</h5>
								<h5 className='character__gray'>Especie</h5>
								<h5>{species}</h5>
							</div>
						</div>
					)
				})
			)}
		</>
	)
}
