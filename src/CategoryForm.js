import React from 'react'
import { Redirect } from 'react-router-dom'


export class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: this.props.categories[0], redirect: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.setState({redirect: true})
        event.preventDefault()
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
            </div>
       )
    }
 }