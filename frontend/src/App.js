import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import Vacation from "./components/Vacation";
import { Switch, Route, Link } from "react-router-dom";
import actions from "./api";

class App extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    let user = await actions.getUser();
    console.log("user is ", user);
    this.setState({ user });
  }

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <main className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-post">Add Country</Link>
          {this.state.user.email ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/auth"> Log In</Link>
          )}
          <Link to="/vacation">Vacations</Link>
        </nav>
        <h1>Travelapp ✈️✈️</h1>

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/add-post"
            render={(props) => <AddPost {...props} />}
          />
          <Route
            exact
            path="/auth"
            render={(props) => <Auth setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                user={this.state.user}
                setUser={this.setUser}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/vacation"
            render={(props) => <vacation {...props} />}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
