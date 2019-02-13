import React from 'react';
import { Word } from './Word'
import { DeleteWord } from './DeleteWord'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, WordStyle, TitleStyle } from './styled/Template'

export class WordList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {words: this.props.words};
        this.onDeleteWord = this.onDeleteWord.bind(this);
    }

    onDeleteWord() {
        alert('The word ' + this.state.word + ' is going to be deleted from the list.');
        this.props.onDeleteWord(this.state);
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
                    <TitleStyle>
                        <p>No words added yet to this category!</p>
                        <p>Do you want to add some? </p>
                    </TitleStyle>  
                    <Button variant="contained" component={Link} to="/insertword">
                        Add a new word
                    </Button>
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.whatToWrite(this.props.category)}
                        {props.map(
                            (word, i, j) => 
                                {if(word.category === this.props.category || this.props.category === undefined) {
                                    return ([
                                        <Card style={{background: 'lightgray'}}> 
                                            <CardContent>
                                                <Word
                                                    key={i}
                                                    word={word.word} 
                                                    translation={word.translation} 
                                                    category={word.category}
                                                />
                                                <DeleteWord 
                                                    key={j} 
                                                    word={word} 
                                                    onDeleteWord={this.props.onDeleteWord}
                                                />
                                            </CardContent>
                                        </Card>
                                    ])
                                }}
                        )}
                </div>
            )
        }
    }

    whatToWrite(cat) {
        if (cat === undefined) {
            return (
                <TitleStyle> All words in my vocab list: </TitleStyle>
            )
        }
        else {
            return (
                <TitleStyle> Words in category "{cat}": </TitleStyle>
            )
        }
    }

    render() {

        return (
            <Container>
                {this.whatTorender(this.props.words)} 
            </Container>
        )
    }
}