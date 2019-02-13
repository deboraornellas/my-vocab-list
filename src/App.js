import React from 'react';
import { Home } from './Home'
import { SignUp } from './SignUp'
import { WordForm } from './WordForm'
import { WordList } from './WordList'
import Template from './Template'
import {BrowserRouter, Route} from 'react-router-dom'


let wordList = [
]

let categoryList = ["Animals", "Feelings", "Colors", "People", "Objects", "Verbs", "Clothing", "Nature", "Other"]
let state = {words: wordList, categories: categoryList}

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onDeleteWord = this.onDeleteWord.bind(this);
        this.state = state;
      }

    componentDidMount() {
      this.updateStateWithLocalStorage();
      window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
    }

    updateStateWithLocalStorage() {
      for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
            try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }
  
    saveStateToLocalStorage() {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }

    handleFormSubmit(s) {
        let newWord = {"word": s.word, "translation": s.translation, "category": s.category}
        this.handleChange(newWord) 
    }

    handleChange(word) {
        this.setState((state) => {
            return {words: state.words.push(word)}, function(){}})

    }

    onDeleteWord(word) {
        let newState = this.state.words;
        var index = newState.indexOf(word);
        if (index > -1) {
            newState.splice(index,1);
        }
        console.log(newState);
        this.setState((state) => {
            return {words: newState}, function(){}})
    }

    render() {
      const list = this.state.words
      return (
        <BrowserRouter>
          <div>
            <Route path='/' render={() => (
              <div>
                <Template categories={categoryList}/>
              </div>
            )}/>
            <Route exact={true} path='/' render={() => (
              <div>
                <Home categories={categoryList} />
              </div>
            )}/>
            <Route exact={true} path='/insertword' render={() => (
              <div>
                <WordForm 
                  categories={categoryList} 
                  onFormSubmit={this.handleFormSubmit} 
                  onFormChange={this.updateInput}
                />
              </div>
            )}/>
            <Route exact={true} path='/allwords' render={() => (
              <div>
                <WordList words={list} onDeleteWord={this.onDeleteWord} />
              </div>
            )}/>
            {this.state.categories.map(
                (category, i) => 
                <Route key={i} exact={true} path={'/'+category} render={() => (
                    <div>
                      <WordList words={list} category={category} />
                    </div>
                  )}/>
            )}
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
