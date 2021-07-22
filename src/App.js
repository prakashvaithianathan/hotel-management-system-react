import React from 'react'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Customer from './Pages/Customer/Customer'
import Edit from './Pages/Edit/Edit'
import {createStore } from 'redux'
import reducer from './Store/Reducer/User'
import {Provider} from 'react-redux'


const store = createStore(reducer)

const App = () => {
  return (
    <div>
    <Provider store={store}>
    <Router>
        <Switch>
          <Route path="/about" exact component={About} style={{backgroundColor:'red'}}  ></Route>
          <Route path="/customer" exact component={Customer} ></Route>
          <Route path="/edit" exact component={Edit} ></Route>
          <Route path="/" exact component={Home} ></Route>
        </Switch>
      </Router>
    </Provider>
    </div>
  )
}

export default App
