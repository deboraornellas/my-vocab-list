import React from 'react';
import { render } from 'react-dom';

let wordList = [
    {"word": "amour", "translation": "love", "category": "nouns"},
    {"word": "chat", "translation": "cat", "category": "animals"}
]

const Word = ({word="No Word", translation= "Not available", category = "None"}) => {
	return (
		<section>
			<h2>{word}</h2>
			<p>Translation: {translation}</p>
			<p>Category: {category}</p>
		</section>
	)
    }

class ListWords extends React.Component {
    render() {
        const { words } = this.props
        return (
            <div>
                <h1> Hi there! This is my french vocab list: </h1>
                {words.map(
                    (word, i) => 
                        <Word
                            key={i}
                            word={word.word} 
                            translation={word.translation} 
                            category={word.category}/>
                )}
            </div>
        )
    }
}

render(
    <ListWords words={wordList}/>,
    document.getElementById('root')
)