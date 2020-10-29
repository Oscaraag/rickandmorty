import React, { useState } from 'react'
import { SearchInput } from '../SearchInput'
import { CardOfCharacter } from '../CardOfCharacter'
import { useGetCharacters } from '../../hooks/useGetCharacters'

export const ListOfCharacters = () => {
	let [page, setPage] = useState(1)
	const [query, setQuery] = useState('')

	const { characterDetails, loading } = useGetCharacters(page)

	const nextPage = () => {
		page < 1 ? setPage(2) : setPage((page += 1))
	}
	const previousPage = () => {
		setPage((page -= 1))
	}

	const filteredCharacter = characterDetails.filter(character =>
		character.name.toLowerCase().includes(query.toLowerCase()),
	)

	return (
		<>
			<SearchInput query={query} setQuery={setQuery} />
			<div className='buttons-container'>
				<button onClick={previousPage}>Previous</button>
				<button onClick={nextPage}>Next</button>
			</div>
			{loading ? (
				<h2>Cargando...</h2>
			) : filteredCharacter.length === 0 ? (
				<h2>No hay personajes</h2>
			) : (
				filteredCharacter.map(character => {
					return <CardOfCharacter {...character} key={character.id} />
				})
			)}
		</>
	)
}
