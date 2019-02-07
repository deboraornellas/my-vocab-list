import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryForm } from './CategoryForm'


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: this.props.categories[0], redirect: false};
    }

    render () {                              
        return (
            <div>
            <h1>Home of "my-vocab-list"</h1>
            <p>Here you can add all vocabulary you have already learned from a new language.</p>
            <h2>Options:</h2>
            <Link to="/allwords" >Show all words</Link>
            <br />
            <CategoryForm categories={this.props.categories}/>
            <br />
            <Link to="/insertword" >Add a new word</Link>
            </div>
       )
    }
 }