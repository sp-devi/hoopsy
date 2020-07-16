import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateSportEvent extends Component {
    constructor() {
        super();
        this.state = {
            cityName: '',
            eventName: '',
            eventAddress: '',
            time: {
                start: '',
                end: ''
            }
        };
    }

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <br />
                        <p className="display-4">Create an event</p>
                    </div>
                </div>

                <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group row justify-content-center'>
                        <div className="col-md-6">
                            <label for="eventNameInput">Event Name</label>
                            <input
                                type='text'
                                placeholder='Event name'
                                name='eventName'
                                className='form-control'
                                value={this.state.eventName}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group row justify-content-center'>
                        <div className="col-md-6">
                            <label for="eventAddressInput">Address</label>
                            <input
                                type='text'
                                placeholder='Address'
                                name='eventAddress'
                                className='form-control'
                                value={this.state.eventAddress}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group row justify-content-center'>
                        <div className="col-md-2">
                            <input
                                type='text'
                                placeholder='Start time'
                                name='eventAddress'
                                className='form-control event-time'
                                value={this.state.time.start}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <span className="text-center">~</span>
                        </div>
                        <div className="col-md-2">
                            <input
                                type='text'
                                placeholder='End time'
                                name='eventAddress'
                                className='form-control event-time'
                                value={this.state.time.end}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateSportEvent;