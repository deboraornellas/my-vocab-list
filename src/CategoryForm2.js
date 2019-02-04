import React from 'react'
// import { Redirect } from 'react-router-dom'


export class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        // <Redirect to={'/'+event.value}/>
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Main category:
                        <select name="category" value={this.state.category}>
                            {this.props.categories.map(
                                (category) => 
                                <option value={ category }>{ category }</option>
                            )}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form> */}
            </div>
        );
    }
}