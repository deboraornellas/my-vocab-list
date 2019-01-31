import React from 'react';
import { render } from 'react-dom';

class Word extends React.Component {

}

class ListWords extends React.Component {
    render() {
        return (
            <h1> Oieee </h1>
        )
    }
}

render(
    <ListWords />,
    document.getElementById('root')
)