import React from 'react';
import Button from '@material-ui/core/Button';                                         

export const DeleteWord = (props) => {

    const state = props.word;

    const handleDelete = () => {
        alert('The word ' + state.word + ' is going to be deleted from the list.');
        props.onDeleteWord(state);
    }
    
    return (
        <Button variant="contained" onClick={handleDelete}>Delete</Button>
    );
}

export default DeleteWord;