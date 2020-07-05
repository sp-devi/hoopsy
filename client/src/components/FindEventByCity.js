import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FindEventByCity extends Component {
    constructor() {
        super();

        this.state = {
            event: {}
        }
        console.log('constructor');
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("submit seach");
        const data = {
            event: e.value
        };
        axios
            .post('http://localhost:8082/api/city', data)
            .then(res => {
                this.setState({
                    event: res.data
                });
                this.props.history.push('/');
            })
            .catch(err => {
                console.log('Error showing User');
            });
    }

    render() {
        const event = this.state.event;
        console.log(event);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <p className="display-4 text-center">Hoopsy</p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Enter City'
                                name='cityName'
                                className='form-control'
                                value={this.state.event.cityName}
                                onChange={this.onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <input
                                type='submit'
                                value="Search"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );

    };
};

export default FindEventByCity;