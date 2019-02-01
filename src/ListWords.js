import React from 'react';
import { Word } from './Word'
import { Link } from 'react-router-dom'

export class ListWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {words: this.props.words};
        console.log(this.props.words)
      }


    render() {
        return (
            <div>
                <Link to="/" >Home</Link>
                <br />
                <Link to="/insertword" >Add a new word</Link>
                <h1> All words in my vocab list: </h1>
                {this.props.words.map(
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