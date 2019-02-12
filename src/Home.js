import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryForm } from './CategoryForm'
import { Container, TitleStyle } from './styled/Template'
import Button from '@material-ui/core/Button';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: this.props.categories[0], redirect: false};
    }

    render () {                              
        return (
            <Container>
                <TitleStyle>This is my personalized vocabulary list!</TitleStyle>
                <p>Here you can add all vocabulary you have already learned from a new language.</p>
                <h2>Options:</h2>
                <Button variant="contained" component={Link} to="/allwords">
                    Show all words
                </Button>
                <br />
                <CategoryForm categories={this.props.categories}/>
                <br />
                <Button variant="contained" component={Link} to="/insertword">
                        Add a new word
                </Button>
            </Container>
       )
    }
 }