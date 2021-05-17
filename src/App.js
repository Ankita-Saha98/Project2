import React from 'react';
import Registration from './comp/Registration'
import Login from './comp/Login'
import Dashboard from './comp/Dashboard'
import { Route, Switch } from 'react-router';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/registration" component={Registration}/>
          <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      </div>
    );
  }
}

export default App;

