import React, { Fragment } from 'react';
import { Word } from '../Word'
import DeleteWord from '../DeleteWord'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, WordStyle, TitleStyle } from '../Template/style'

export const WordList = (props) => {
         
    const whatTorender = (words) => {
        let count = 0;
        words.map(
            (word) => 
                {if(word.category === props.category || props.category === "all") {
                    count++
                }}
        )
        if(count === 0) {
            return (
                <Fragment>
                    <TitleStyle>
                        <p>No words added yet to this category!</p>
                        <p>Do you want to add some? </p>
                    </TitleStyle>  
                    <Button variant="contained" component={Link} to="/insertword">
                        Add a new word
                    </Button>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    {whatToWrite(props.category)}
                        {words.map(
                            (word, i) => 
                                {if(word.category === props.category || props.category === "all") {
                                    return ([
                                        <Card key={i} style={{background: 'lightgray'}}> 
                                            <CardContent>
                                                <Word
                                                    word={word.word} 
                                                    translation={word.translation} 
                                                    category={word.category}
                                                />
                                                <DeleteWord 
                                                    word={word} 
                                                    onDeleteWord={props.onDeleteWord}
                                                />
                                            </CardContent>
                                        </Card>
                                    ])
                                }}
                        )}
                </Fragment>
            )
        }
    }

    const whatToWrite = (cat) => {
        if (cat === "all") {
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

    return (
        <Container>
            {whatTorender(props.words)} 
        </Container>
    )
}