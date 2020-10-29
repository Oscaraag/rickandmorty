import React from 'react'

export const CardOfCharacter = ({ image, name, status, location, species }) => {
	return (
		<div className='character__card--container'>
			<figure>
				<img
					src={image}
					alt='Avatar Character'
					className='character__card--image'
				/>
			</figure>
			<div className='character__details--container'>
				<h2 className='Character__name'>{name}</h2>
				<h3 className='character__status'>{status}</h3>
				<h5 className='character__gray'>Ultima ubicación conocida:</h5>
				<h5>{location.name}</h5>
				<h5 className='character__gray'>Especie:</h5>
				<h5>{species}</h5>
			</div>
		</div>
	)
}
