import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import AddPost from './components/AddPost'
import { Switch, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>🧨 Iron Plate 🚀</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-post">Add Post</Link>
        </nav>


        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route exact path='/add-post' render={(props) => <AddPost {...props} />} />

        </Switch>


      </main>
    );
  }
}

export default App;