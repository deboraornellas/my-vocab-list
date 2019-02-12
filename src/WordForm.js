import React from 'react';
import { CategoryForm } from './CategoryForm';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import { Container } from './styled/Template'


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
        }, ()=>{})
      }


    handleSubmit(event) {
        alert('New word and translation were submitted: ' + this.state.word + '/' + this.state.translation + '/' + this.state.category);
        event.preventDefault();
        this.props.onFormSubmit(this.state);
    }

    render() {
        return (
            <Container>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <h3> Add new words: </h3>
                    <TextField
                        name="word"
                        label="New french word"
                        value={this.state.word}
                        onChange={this.handleChange}
                        display={this.state['word']}
                        type="text"
                        //className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        name="translation"
                        label="Translation"
                        value={this.state.translation}
                        onChange={this.handleChange}
                        type="text"
                        //className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <br />
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
                <br />
                <CategoryForm categories={this.props.categories}/>
            </Container>
        );
    }
}