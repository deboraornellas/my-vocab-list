import React from 'react';
import { Home } from './Home'
import { SignUp } from './SignUp'
import { WordForm } from './WordForm'
import { ListWords} from './ListWords'
import {
    BrowserRouter,
    Route,
  } from 'react-router-dom'

let wordList = [
    {"word": "amour", "translation": "love", "category": "feelings"},
    {"word": "chat", "translation": "cat", "category": "animals"}
]

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {words: wordList}
        console.log("hi")
      }

    

    handleFormSubmit(s) {
        let newWord = {"word": s.word, "translation": s.translation, "category": s.category}
        this.handleChange(newWord)  
    }

    handleChange(word) {
        console.log(word)
        console.log(this.state)
        this.setState((state) => {
            return {words: state.words.push(word)}, function(){}})
    }

    componentDidUpdate(){
    }

    render() {
        const list = this.state.words
        console.log(list)
      return (
        <BrowserRouter>
          <div>
            <Route exact={true} path='/' component = { Home }/>
            <Route exact={true} path='/insertword' render={() => (
              <div>
                <WordForm words = {list} onFormSubmit={this.handleFormSubmit} />
              </div>
            )}/>
            <Route exact={true} path='/allwords' render={() => (
              <div>
                <ListWords words={list} />
              </div>
            )}/>
            <Route exact={true} path='/signup' render={() => (
              <div>
                <SignUp />
              </div>
            )}/>
          </div>
        </BrowserRouter>
      );
    }
  }
