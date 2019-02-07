import React from 'react';
import { Link } from 'react-router-dom'
import { CategoryForm } from './CategoryForm';


export class WordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {word: '', translation: '', category: this.props.categories[0]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        })
      }


    handleSubmit(event) {
        alert('New word and translation were submitted: ' + this.state.word + '/' + this.state.translation);
        event.preventDefault();
        this.props.onFormSubmit(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3> Add new words: </h3>
                    <label>
                        New french word:
                        <input name="word" type="text" value={this.state.word} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Translation:
                        <input name="translation" type="text" value={this.state.translation} onChange={this.handleChange} />
                    </label>
                    <br />
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
                <Link to="/allwords" >Show all words</Link>
                <br />
                <Link to="/" >Home</Link>
                <br />
                <CategoryForm categories={this.props.categories}/>
            </div>
        );
    }
}