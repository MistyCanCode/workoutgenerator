//import { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import NewsFeed from './components/NewsFeed';
import SignUp from './components/signup';
import Login from './components/login';
import FormPage from './components/FormPage';
import Workout from './components/workout';

const App = () => {
  <div className='App'>
    <Route
    path='/'
    render={() => (
      <nav>
        <NavLink to='/'>Home</NavLink>&ensp;
        <NavLink to='/login'>Login</NavLink>&ensp;
        <NavLink to='/sign'>SignUp</NavLink>&ensp;
        <NavLink to='/news'>News</NavLink>
      </nav>
    )}
    />
    <Switch>
    <Home/>
    <NewsFeed/>
    <Login/>
    <SignUp/>
    <FormPage/>
    <Workout/>
    <Route path='/' component={Home}/>
    </Switch>
  </div>
}
export default App;


