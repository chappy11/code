import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Main from './Main';
import './App.css'
import Greetings from './Greetings';
import Login from './Login';
import Mygreeting from './Mygreeting'
function App() {
  return (
      <Router>
          <Switch>
              <Route path="/code" exact component={Main}/>
              <Route path="/greetings" component={Greetings}/>
              <Route path="/login" component={Login}/>
              <Route path="/mygreeting" component={Mygreeting}/>
          </Switch>
      </Router>
    )
}

export default App
