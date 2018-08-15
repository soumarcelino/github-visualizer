import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Authorize from './Authorize';
import ReturnAuthorize from './ReturnAuthorize';
import SearchField from './SearchField';
import MenuAppBar from './MenuAppBar'
class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      history : ""
    }
  }
  render() {
        return (
          <main>
            <Route component={MenuAppBar}/>
            <Switch>
              <Route exact path='/' component={Authorize}/>
              <Route path='/return-authorize' component={ReturnAuthorize}/>
              <Route path='/search' component={ SearchField }/>
            </Switch>
          </main>
        )
    }
}
export default Main