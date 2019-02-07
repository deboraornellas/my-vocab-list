import React from 'react';


export class DeleteWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {word: this.props.word};

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        alert('The word ' + this.state.word.word + ' is going to be deleted from the list.');
        this.props.onDeleteWord(this.state.word);
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}