import Navigate from 'common/components/Link'
import React from 'react'
import { NavbarContainer } from './styled'

const Navbar = () => {
	return (
		<NavbarContainer>
			<Navigate to="profile">Profile</Navigate>
			<Navigate to="exp">Exp</Navigate>
		</NavbarContainer>
	)
}

export default Navbar
