import React from 'react'
import { TitleStyle } from '../Template/style'

export const Word = ({word="No Word", translation= "Not available", category = "None"}) => {
	return (
		<section>
			<TitleStyle style={{color: 'SaddleBrown'}}>{word}</TitleStyle>
			<p ><strong>Translation:</strong> {translation}</p>
			<p><strong>Category:</strong> {category}</p>
		</section>
	)
}   