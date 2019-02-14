import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryForm } from '../CategoryForm/component'
import { Container, TitleStyle } from '../Template/style'
import Button from '@material-ui/core/Button';

const Home = (props) => {                         
    return (
        <Container>
            <TitleStyle>This is my personalized vocabulary list!</TitleStyle>
            <p>Here you can add all vocabulary you have already learned from a new language.</p>
            <h2>Options:</h2>
            <Button variant="contained" component={Link} to="/allwords">
                Show all words
            </Button>
            <br />
            <CategoryForm categories={props.categories}/>
            <br />
            <Button variant="contained" component={Link} to="/insertword">
                    Add a new word
            </Button>
        </Container>
    )
 }

 export default Home;