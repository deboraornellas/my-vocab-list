import React from 'react'
import TriviaFormComponent from './trivia-form.component'


export class TriviaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { category: this.props.categories[0] };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(category) {
        this.props.startGame(category);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <TriviaFormComponent
                category={this.state.category}
                categories={this.props.categories}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}