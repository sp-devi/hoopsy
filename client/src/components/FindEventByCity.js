import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Find Events based on input city
class FindEventByCity extends Component {
    constructor() {
        super();

        this.state = {
            city: ''
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
        console.log("submit search: ");

        axios
            .get('http://localhost:8082/api/sportEvent/' + this.state.city)
            .then(res => {
                this.setState({
                    event: res.data
                });
                // this.props.history.push('/show-events', data);
                this.props.history.push({
                    pathname: '/show-events',
                    state: { detail: 'city name' }
                });
            })
            .catch(err => {
                console.log('Error showing Events');
            });
    }

    render() {
        const event = this.state.event;
        console.log(event);

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <br />
                        <p className="display-4 text-center">Hoopsy</p>
                    </div>
                </div>

                <form noValidate onSubmit={this.onSubmit}>
                    <div className="row justify-content-center">
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Enter City'
                                name='city'
                                className='form-control'
                                value={this.state.city}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row justify-content-center">
                        <div className='form-group'>
                            <input
                                type='submit'
                                value="Search"
                            />
                        </div>
                        <Link to="/show-events">
                            show
                        </Link>
                    </div>
                </form>
            </div >
        );

    };
};

export default FindEventByCity;