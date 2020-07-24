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
                var resultData = [
                    {
                        city: 'Nagoya',
                        eventName: 'International event'
                    },
                    {
                        city: 'Okazaki',
                        eventName: 'Yuki bbball'
                    }
                ]
                this.props.history.push({
                    pathname: '/show-events',
                    state: { detail: resultData }
                });
            })
            .catch(err => {
                console.log('Error showing Events');
            });
    }

    render() {
        const event = this.state.event;
        return (
            <div>
                <header class="masthead text-white text-center">
                    <div class="overlay"></div>
                    <div className="container create-event-container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <br />
                                <p className="display-4 text-center">Hoopsy</p>
                            </div>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="row justify-content-center mt-5">
                                <div className="col-md-auto">
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
                            </div>
                            <br />
                            <div className="row justify-content-center">
                                <div className="col-md-auto">
                                    <div className='form-group'>
                                        <input
                                            type='submit'
                                            value="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-auto">
                                    <Link to="/create-event">
                                        Create an event
                        </Link>
                                </div>
                            </div>
                        </form>
                    </div >
                </header>

                <section class="features-icons bg-light text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div class="features-icons-icon d-flex">
                                        <i class="icon-screen-desktop m-auto text-primary"></i>
                                    </div>
                                    <h3>Events in your city</h3>
                                    <p class="lead mb-0">Event 1</p>
                                    <p class="lead mb-0">Event 2</p>
                                    <p class="lead mb-0">Event 3</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div class="features-icons-icon d-flex">
                                        <i class="icon-layers m-auto text-primary"></i>
                                    </div>
                                    <h3>Groups</h3>
                                    <p class="lead mb-0">Group 1</p>
                                    <p class="lead mb-0">Group 2</p>
                                    <p class="lead mb-0">Group 3</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <div class="features-icons-icon d-flex">
                                        <i class="icon-check m-auto text-primary"></i>
                                    </div>
                                    <h3>Host Event</h3>
                                    <p class="lead mb-0">Event 1</p>
                                    <p class="lead mb-0">Event 2</p>
                                    <p class="lead mb-0">Event 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );

    };
};

export default FindEventByCity;