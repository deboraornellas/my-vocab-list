import React from 'react'
import { Link } from 'react-router-dom'
import { Bla } from './Bla'
import { WordForm } from './WordForm'
import { Redirect } from 'react-router-dom'


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: this.props.categories[0], redirect: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {
        this.setState({redirect: true})
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        })
      }

    render () {     
        const redirect = this.state.redirect
        if (redirect) {
            return <Redirect to={"/"+ this.state.category}/>
        }                              
        return (
            <div>
            {/* <a href="signin">Sign In</a>
            <a href="signup" >Sign Up</a> */}
            <h1>Home of "my-vocab-list"</h1>
            <p>Here you can add all vocabulary you have already learned from a new language.</p>
            <h2>Options:</h2>
            <Link to="/allwords" >Show all words</Link>
            <br />
            <p>Show words from a specific category:</p>
            <form onSubmit={this.handleSubmit}>
                    <label>
                        Main category:
                        <select name="category" value={this.state.category} onChange={this.handleChange}>
                            {this.props.categories.map(
                                (category, i) => 
                                <option key={i} value={ category }>{ category }</option>
                            )}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            <br />
            <Link to="/insertword" >Add a new word</Link>
            </div>
       )
    }
 }