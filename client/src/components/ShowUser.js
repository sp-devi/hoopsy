import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import User from './CreateUser'

class ShowUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/user')
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                console.log('Error showing User');
            })
    };

    render() {
        const user = this.state.user;
        console.log(user);

        return (
            <div>
                <div>
                    User Profile
                </div>
                <h2>{user.name}</h2>
            </div>
        );

    };
};

export default ShowUser;

