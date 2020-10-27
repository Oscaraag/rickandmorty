import React from 'react'
import { CharacterCard } from './components/CharacterCard'

import './App.css'
import Layout from './components/Layout'

export const App = () => {
	return (
		<Layout>
			<div className='App'>
				<CharacterCard />
			</div>
		</Layout>
	)
}
