import React from 'react';
import { CategoryForm } from '../CategoryForm/component';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import { Container } from '../Template/style'


export const WordFormContainer = (props) => {
    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
                <h3> Add new words: </h3>
                <TextField
                    name="word"
                    label="New french word"
                    value={props.state.word}
                    onChange={props.handleChange}
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <br />
                <TextField
                    name="translation"
                    label="Translation"
                    value={props.state.translation}
                    onChange={props.handleChange}
                    type="text"
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
                        value={props.state.category}
                        onChange={props.handleChange}
                    >
                        {props.categories.map(
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
            <CategoryForm categories={props.categories}/>
        </Container>
    );
}

export default WordFormContainer;
