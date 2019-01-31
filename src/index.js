import React from 'react';
import { render } from 'react-dom';

let wordList = [
    {"word": "amour", "translation": "love", "category": "feelings"},
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

class WordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {word: '', translation: '', category: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name)

        this.setState({
        [name]: value
        })
      }


    handleSubmit(event) {
        alert('New word and translation were submitted: ' + this.state.word + '/' + this.state.translation);
        event.preventDefault();
        this.props.onFormSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h3> Add new words: </h3>
            <label>
                New french word:
                <input name="word" type="text" value={this.state.word} onChange={this.handleChange} />
            </label>
            <br />
            <label>
                Translation:
                <input name="translation" type="text" value={this.state.translation} onChange={this.handleChange} />
            </label>
            <br />
            <label>
                Main category:
                <input name="category" type="text" value={this.state.category} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}
  
    

class ListWords extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {words: wordList};
        console.log(this.state.words)
      }


    handleFormSubmit(s) {
        let newWord = {"word": s.word, "translation": s.translation, "category": s.category}
        this.handleChange(newWord)  
    }

    handleChange(word) {
        this.setState((state) => {
            return {words: state.words.push(word)}, function(){console.log(this.state.words)}})
        
    }

    render() {
        return (
            <div>
                <h1> Hi there! This is my french vocab list! </h1>
                <WordForm onFormSubmit={this.handleFormSubmit} />
                {this.state.words.map(
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