import React from 'react';
import WordFormContainer from './container'


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

        this.setState({[name]: value}, ()=>{})
      }


    handleSubmit(event) {
        alert('New word and translation were submitted: ' + this.state.word + '/' + this.state.translation + '/' + this.state.category);
        event.preventDefault();
        this.props.onFormSubmit(this.state);
    }

    render() {
        return (
            <WordFormContainer
                state={this.state}
                handleChange={this.handleChange}
                categories={this.props.categories}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}