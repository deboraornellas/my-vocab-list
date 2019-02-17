import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryForm } from '../CategoryForm/component'
import { Container, TitleStyle, MainTitleStyle } from '../Template/style'
import Button from '@material-ui/core/Button';

const Home = (props) => {                         
    return (
        <Container>
            <MainTitleStyle>This is my personalized vocabulary list!</MainTitleStyle>
            <img 
                src={require('../vocab-background.jpg')} 
                style = {{width: "80%"}}
            />
            <p><strong>A new way to keep track of everything you have learned!</strong></p>            
            <p>Here you can add all the words you know from a new language and test your memory.</p>            
            
            <TitleStyle>Options:</TitleStyle>
            <Button variant="contained" component={Link} to="/allwords">
                Show all words
            </Button>
            <br />
            <CategoryForm categories={props.categories} mode={"showAll"}/>
            <br />
            <Button variant="contained" component={Link} to="/insertword">
                    Add a new word
            </Button>
        </Container>
    )
 }

 export default Home;