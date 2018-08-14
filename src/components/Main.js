import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Authorize from './Authorize';
import ReturnAuthorize from './ReturnAuthorize';
import SearchField from './SearchField';

export default class Main extends React.Component {
    render() {
        return (
          <main>
            <Switch>
              <Route exact path='/' component={Authorize}/>
              <Route path='/return-authorize' component={ReturnAuthorize}/>
              <Route path='/search' component={ SearchField }/>
            </Switch>
          </main>
        )
    }
}