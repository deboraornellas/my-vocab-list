import React from 'react'
import { Redirect } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'



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
            <h3>Show words from a specific category:</h3>
            <form onSubmit={this.handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="select-multiple">Category</InputLabel>
                    <Select
                        name="category"
                        label="Category"
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        {this.props.categories.map(
                                (category, i) => 
                                <MenuItem 
                                    key={i} 
                                    value={ category }
                                >
                                    { category }
                                </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <br/> <br/>
                <Button variant="contained" type="submit">Submit</Button>
                </form>
            </div>
       )
    }
 }