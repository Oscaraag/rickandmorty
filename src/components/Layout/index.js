import React from 'react'
import logo from '../../assets/logorick.png'

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<figure className='header__img--container'>
					<img src={logo} alt='logo' />
				</figure>
			</header>
			{children}
		</>
	)
}

export default Layout
