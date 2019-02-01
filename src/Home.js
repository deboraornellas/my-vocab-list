import React from 'react'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
    state = { 
    }
    render () {                                   
       return (
         <div id='container'>
            {/* <a href="signin">Sign In</a>
            <a href="signup" >Sign Up</a> */}
            <h1>Home of "my-vocab-list"</h1>
            <p>Here you can add all vocabulary you have already learned from a new language.</p>
            <h2>Options:</h2>
            <Link to="/allwords" >Show all words</Link>
            <br />
            <Link to="/insertword" >Add a new word</Link>
         </div>
       )
    }
 }