import React, {Fragment} from 'react';
import Home from './Home'
import { WordForm } from './WordForm/component'
import { WordList } from './WordList/container'
import Template from './Template/container'
import { BrowserRouter, Route } from 'react-router-dom'


export const Routes = (props) => {
    return (
        <BrowserRouter>
            <Fragment>
                <Route path='/' render={() => (
                    <Template categories={props.categories}/>
                    )}
                />
                <Route exact={true} path='/' render={() => (
                    <Home categories={props.categories} />
                    )}
                />
                <Route exact={true} path='/insertword' render={() => (
                    <WordForm 
                        categories={props.categories} 
                        onFormSubmit={props.addNewWord} 
                    />
                    )}
                />
                <Route exact={true} path='/allwords' render={() => (
                    <WordList words={props.list} category={"all"} onDeleteWord={props.onDeleteWord} />
                    )}
                />
                {props.categories.map(
                    (category, i) => 
                    <Route key={i} exact={true} path={'/'+category} render={() => (
                        <WordList words={props.list} category={category} onDeleteWord={props.onDeleteWord} />
                    )}
                />)}  
            </Fragment>
        </BrowserRouter>
    )
}
