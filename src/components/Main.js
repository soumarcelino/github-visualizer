import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Authorize from './Authorize';
import ReturnAuthorize from './ReturnAuthorize';
import MenuAppBar from './MenuAppBar'
import Dashboard from './Dashboard';
class Main extends React.Component {
  render() {
        return (
          <main>
            <Route component={MenuAppBar}/>
            <div className="container">
              <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/authorize' component={Authorize}/>
                <Route path='/return-authorize' component={ReturnAuthorize}/>
                <Route component={Dashboard}/>
              </Switch>
            </div>
          </main>
        )
    }
}
export default Main