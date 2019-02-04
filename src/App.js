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
    {"word": "amour", "translation": "love", "category": "Feelings"},
    {"word": "chat", "translation": "cat", "category": "Animals"}
]

let state = {words: wordList, categories: categoryList}

let categoryList = ["Animals", "Feelings", "Colors", "People", "Objects", "Verbs", "Clothing", "Nature", "Other"]

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {words: wordList, categories: categoryList}
      }

    

    handleFormSubmit(s) {
        let newWord = {"word": s.word, "translation": s.translation, "category": s.category}
        this.handleChange(newWord)  
    }

    handleChange(word) {
        this.setState((state) => {
            return {words: state.words.push(word)}, function(){}})
    }

    componentDidUpdate(){
    }

    render() {
        const list = this.state.words
      return (
        <BrowserRouter>
          <div>
            <Route exact={true} path='/' render={() => (
              <div>
                <Home categories={categoryList} />
              </div>
            )}/>
            <Route exact={true} path='/insertword' render={() => (
              <div>
                <WordForm categories={categoryList} onFormSubmit={this.handleFormSubmit} />
              </div>
            )}/>
            <Route exact={true} path='/allwords' render={() => (
              <div>
                <ListWords words={list} />
              </div>
            )}/>
            {this.state.categories.map(
                (category, i) => 
                <Route key={i} exact={true} path={'/'+category} render={() => (
                    <div>
                      <ListWords words={list} category={category} />
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
