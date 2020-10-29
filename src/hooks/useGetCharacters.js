import { useState, useEffect } from 'react'

export const useGetCharacters = page => {
	const [characterDetails, setCharacterDetails] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const data = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`,
			)
			const character = await data.json()
			const details = await character.results
			setCharacterDetails(details)
			setLoading(false)
		}
		getData()
	}, [page])

	return { characterDetails, loading }
}
