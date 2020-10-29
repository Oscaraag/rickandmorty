import React from 'react'
import { ListOfCharacters } from './components/ListOfCharacters'

import './App.css'
import Layout from './components/Layout'

export const App = () => {
	return (
		<Layout>
			<div className='App'>
				<ListOfCharacters />
			</div>
		</Layout>
	)
}
