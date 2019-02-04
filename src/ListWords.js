import React from 'react';
import { Word } from './Word'
import { Link } from 'react-router-dom'

export class ListWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {words: this.props.words};
    }
      
    whatTorender(props){
        console.log("size "+ props.length)
        let count = 0;
        props.map(
            (word) => 
                {if(word.category === this.props.category || this.props.category === undefined) {
                    count++
                }}
        )
        if(count === 0) {
            return (
                <div>
            <h1> No words added yet to this category! </h1>
            <p> Do you want to add some? </p>
            </div>)
        }
        else {
            return (
                <div>
                    <h1> All words in my vocab list: </h1>
                        {props.map(
                            (word, i) => 
                                {if(word.category === this.props.category || this.props.category === undefined) {
                                    return <Word
                                    key={i}
                                    word={word.word} 
                                    translation={word.translation} 
                                    category={word.category}/>
                                }}
                        )}
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                <Link to="/" >Home</Link>
                <br />
                <Link to="/insertword" >Add a new word</Link>
                {this.whatTorender(this.props.words)}
            </div>
        )
    }
}