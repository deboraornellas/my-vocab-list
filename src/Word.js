import React from 'react'

export const Word = ({word="No Word", translation= "Not available", category = "None"}) => {
	return (
		<section>
			<h2 >{word}</h2>
			<p >Translation: {translation}</p>
			<p>Category: {category}</p>
		</section>
	)
}   