import React from 'react'
import styled from 'styled-components'

export const Header = styled.div`
	text-align: center;
	font-size: 2em;
	font-family: 'Gloria Hallelujah', cursive;
	color: white;
	padding: 20px;
	border: 0px;
	margin: 0px;
	background-color: gray;
`


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: fit-content;
	min-width: 30%;
	margin: 10px auto;
	padding: 20px;
	border: 5px black solid;
	min-height: 80%;
	background-color: white;
	font-family: 'Roboto', sans-serif;
`

export const TitleStyle = styled.h2`
    display: flex;
	flex-direction: column;
	text-align: center;
    align-items: center;
    font-family: 'Gloria Hallelujah', cursive;
    color: green;
`

export const ParagraphStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Roboto', sans-serif;
	color: palevioletred;
`


export const WordStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 5px;
    border: 1px lightgrey solid;
    justify-content: center;
`

