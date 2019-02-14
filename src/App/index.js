import React from 'react';
import { Routes } from '../routes'

let hasError;
let categoryList = ["Animals", "Feelings", "Colors", "People", "Objects", "Verbs", "Clothing", "Nature", "Other"]
let state = {words: [], categories: categoryList}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = state;
        hasError = false;
    }

    componentDidMount() {
        this.updateStateWithLocalStorage();
        window.addEventListener("error", this.error.bind(this));
        window.addEventListener(
            "beforeunload", 
            this.saveStateToLocalStorage.bind(this)
        );
    }

    error() {
        this.hasError = true;
        console.log("error")
    }

    updateStateWithLocalStorage() {
        for (let key in this.state) {
            if (localStorage.hasOwnProperty(key)) {
                let value = localStorage.getItem(key);
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                    } 
                catch (e) {
                    this.setState({ [key]: value });
                }
            }
        }
    }
    saveStateToLocalStorage() {
        if (!this.hasError){
            for (let key in this.state) {
                localStorage.setItem(key, JSON.stringify(this.state[key]));
            }
        }
        else {
            for (let key in this.state) {
                localStorage.setItem(key, JSON.stringify([]));
            }
        }
    }

    addNewWord = (state) => {
        let newWord = {"word": state.word, "translation": state.translation, "category": state.category}
        this.setState((state) => {
            //return {words: state.words.push(newWord)}}
            return {words: state.words.push(newWord)}, ()=>{}}
        )
    }

    onDeleteWord = (word) => {
        let {words} = this.state;
        var index = words.indexOf(word);
        if (index > -1) {
            words.splice(index,1);
        }
        this.setState({words})
    }

    render() {
        const list = this.state.words
        console.log(hasError)
        return (
            <Routes 
                categories={categoryList} 
                list={list} 
                onDeleteWord={this.onDeleteWord}
                addNewWord={this.addNewWord}
            />
        );
    }
}
