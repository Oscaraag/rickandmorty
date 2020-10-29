import React from 'react'

export const SearchInput = ({ query, setQuery }) => {
	return (
		<>
			<nav className='header__input'>
				<span>Buscar</span>
				<input
					value={query}
					type='text'
					onChange={e => {
						setQuery(e.target.value)
					}}
				/>
			</nav>
		</>
	)
}
