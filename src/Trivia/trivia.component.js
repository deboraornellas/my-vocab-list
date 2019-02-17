import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container } from "../Template/style";

const TriviaComponent = ({
    onChange,
    onSubmit,
    restartGame,
    endGame,
    word,
    triviaInput
}) => {
    return (
        <Container>
            <form onSubmit={onSubmit}>
                <div>
                    <h3> Word: </h3> 
                    {word} 
                </div>
                <h3> Write the translation: </h3>
                <TextField
                    name="trivia-input"
                    label="Traduction"
                    value={triviaInput}
                    onChange={event => onChange(event.target.value)}
                    type="text"
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                />
                <br />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
                <br />
                <br />
                <Button variant="contained" onClick={restartGame}>
                    Try another word
                </Button>
                <br />
                <br />
                <Button variant="contained" onClick={endGame}>
                    End Game
                </Button>
            </form>
        </Container>
    );
};

export default TriviaComponent;
