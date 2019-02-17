import React, { Fragment } from "react";
import { TriviaForm } from "./trivia-form.container";
import TriviaComponent from "./trivia.component";
import { Container, TitleStyle } from "../Template/style";

let wordsByCategory = {};
let nonEmptyCategories = [];

export class Trivia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "none",
            typedInput: "",
            word: "Rouge",
            correctAnswer: "Red",
            submitted: false,
            correct: false,
            play: false
        };
        this.createWordsByCategoryObject();
        this.listNonEmptyCategories();
    }

    createWordsByCategoryObject = () => {
        this.props.categories.forEach(element => {
            wordsByCategory[element] = [];
        });
        wordsByCategory["All Words"] = [];
    };

    fillCategories = () => {
        this.props.words.map(word => {
            if (!wordsByCategory[word.category].includes(word)) {
                wordsByCategory[word.category].push(word);
                wordsByCategory["All Words"].push(word);
            }
        });
    };

    listNonEmptyCategories = () => {
        this.props.categories.forEach(category => {
            if (
                wordsByCategory[category].length !== 0 &&
                !nonEmptyCategories.includes(category)
            ) {
                nonEmptyCategories.push(category);
            }
        });
        if (
            this.props.words.length !== 0 &&
            !nonEmptyCategories.includes("All Words")
        ) {
            nonEmptyCategories.push("All Words");
        }
    };

    startGame = category => {
        this.setState({ category }, () => {
            this.chooseTriviaWord();
        });
        this.setState({ play: true });
    };

    updateTypedInput = typedInput => {
        this.setState({ typedInput });
    };

    sendAnswer = event => {
        event.preventDefault();
        if (this.state.typedInput === this.state.correctAnswer) {
            this.setState({ correct: true });
        } else {
            this.setState({ correct: false });
        }
        this.setState({ submitted: true });
    };

    restartGame = event => {
        event.preventDefault();
        this.chooseTriviaWord();
        this.setState({ submitted: false });
    };

    endGame = event => {
        event.preventDefault();
        this.setState({ play: false, submitted: false });
    };

    showMsgAfterSubmit = () => {
        if (this.state.submitted) {
            if (this.state.correct) {
                return this.showCorrectAnswerMsg;
            } else {
                return this.showIncorrectAnswerMsg;
            }
        }
    };

    chooseTriviaWord = () => {
        if (this.state.play) {
            let numberOfWordsInCategory =
                wordsByCategory[this.state.category].length;
            let wordID = this.randomNumber(numberOfWordsInCategory);
            console.log(wordsByCategory["All Words"]);
            this.setState({
                word: wordsByCategory[this.state.category][wordID].word,
                correctAnswer:
                    wordsByCategory[this.state.category][wordID].translation
            });
        }
    };

    randomNumber = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    render() {
        this.fillCategories();
        this.listNonEmptyCategories();

        const showMsgAfterSubmit = () => {
            if (this.state.submitted) {
                if (this.state.correct) {
                    return showCorrectAnswerMsg();
                } else {
                    return showIncorrectAnswerMsg();
                }
            }
        };

        const showCorrectAnswerMsg = () => {
            console.log("correct");
            return (
                <Fragment>
                    <TitleStyle style={{ color: "green" }}>
                        Correct Answer!!
                    </TitleStyle>
                </Fragment>
            );
        };

        const showIncorrectAnswerMsg = () => {
            console.log("incorrect");
            return (
                <Fragment>
                    <TitleStyle style={{ color: "darkred" }}>
                        Incorrect Answer... Try again
                    </TitleStyle>
                </Fragment>
            );
        };

        const validate = () => {
            if (nonEmptyCategories.length === 0) {
                return (
                    <div>
                        <h2>
                            There isn't any words in your vocab list yet! Add
                            some to play the trivia :)
                        </h2>
                    </div>
                );
            } else {
                return (
                    <TriviaForm
                        categories={nonEmptyCategories}
                        startGame={this.startGame}
                    />
                );
            }
        };

        const showTriviaQuestion = () => {
            //debugger
            if (this.state.category !== "none" && this.state.play) {
                return (
                    <TriviaComponent
                        word={this.state.word}
                        category={this.state.category}
                        onSubmit={this.sendAnswer}
                        onChange={this.updateTypedInput}
                        restartGame={this.restartGame}
                        endGame={this.endGame}
                        triviaInput={this.state.typedInput}
                    />
                );
            }
        };
        return (
            <Container>
                {validate()}
                {showTriviaQuestion()}
                {showMsgAfterSubmit()}
            </Container>
        );
    }
}
