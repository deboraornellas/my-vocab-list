import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

const MenuIconStyle = styled.div`
	position: absolute;
	margin-left: 'none';
	transition: margin .2s;
	color: white;
	padding: 20px;
	border: 0px;
	margin: 0px;
`

export const NavToggleButton = (props) => {
	return (
		<MenuIconStyle>
			<IconButton
				onClick={props.toggle}
			>
				<MenuIcon/>
			</IconButton>
		</MenuIconStyle>
	)
}
