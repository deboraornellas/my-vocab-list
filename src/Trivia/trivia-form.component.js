import React from "react";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { TitleStyle } from "../Template/style";

export const TriviaFormComponent = props => {
    const onSubmit = event => {
        event.preventDefault();
        event.persist();
        let category = event.target[0].value;
        props.onSubmit(category);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TitleStyle>Choose a category for the trivia:</TitleStyle>
                <FormControl>
                    <InputLabel htmlFor="select-multiple">Category</InputLabel>
                    <Select
                        name="category"
                        label="Category"
                        value={props.category}
                        onChange={props.onChange}
                    >
                        {props.categories.map((category, i) => (
                            <MenuItem key={i} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <br /> <br />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default TriviaFormComponent;
