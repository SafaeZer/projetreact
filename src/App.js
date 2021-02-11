
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/tp1IMC';
import Page from './pages/tp3git';
import TodoList from './pages/tp5Todo';
import Comment from './pages/tp2Comments';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/imc' exact component={Form} />
          <Route path='/Comments' component={Comment} />
          <Route path='/git' component={Page} />
          <Route path='/Todo' component={TodoList} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;


