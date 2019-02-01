import React from 'react';
import { render } from 'react-dom';
import { App } from './App'

let wordList = [
    {"word": "amour", "translation": "love", "category": "feelings"},
    {"word": "chat", "translation": "cat", "category": "animals"}
]

render(
    <App words={wordList}/>,
    document.getElementById('root')
)