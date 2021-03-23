import React, { Component } from 'react';
import axios from 'axios'
import actions from '../api'

class Home extends Component {

    _state = {
        posts: []
    };
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }

    async componentDidMount() {
        // let res = await axios.get(`http://localhost:5000/api/getPosts`)
        // console.log(res)
        let res = await actions.getPosts()
        this.setState({ posts: res.data })
    }

    showPosts = () => {
        return this.state.posts.map(eachPost => {
            return <li key={eachPost._id}> {eachPost.message} </li>
        })
    }

    render() {
        return (
            <div>
                
               
            </div>
        );
    }
}

export default Home;