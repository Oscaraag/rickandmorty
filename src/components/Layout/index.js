import React from 'react'
import logo from '../../assets/logorick.png'

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<figure className='header__img--container'>
					<img src={logo} alt='logo' />
				</figure>

				<nav className='header__input'>
					<span>Buscar...</span>
					<input type='text' />
				</nav>
			</header>
			{children}
		</>
	)
}

export default Layout
