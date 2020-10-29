import React from 'react'
// import search from '../../assets/search-solid.svg'
import { SearchIcon } from '../SearchIcon'

export const SearchInput = ({ query, setQuery }) => {
	return (
		<>
			<nav className='header__input'>
				<input
					placeholder='Buscar'
					value={query}
					type='text'
					onChange={e => {
						setQuery(e.target.value)
					}}
				/>
				<SearchIcon />
			</nav>
		</>
	)
}
