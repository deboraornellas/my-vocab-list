import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import { TitleStyle } from '../Template/style';



export const CategoryForm = (props) => {
    return (
        <div>
            <TitleStyle>Show words from a specific category:</TitleStyle>
            <form onSubmit={props.onSubmit}>
                <FormControl>
                    <InputLabel htmlFor="select-multiple">Category</InputLabel>
                    <Select
                        name="category"
                        label="Category"
                        value={props.state.category}
                        onChange={props.onChange}
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
        </div>
       )
    }

    export default CategoryForm;
 