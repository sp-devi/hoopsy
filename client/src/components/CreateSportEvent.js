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
            date: '',
            time: {
                start: '',
                end: ''
            }
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="container create-event-container">
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
                        <div className="col-md-6">
                            <label for="eventDateInput">Date</label>
                            <input
                                type='date'
                                placeholder='Date'
                                name='eventDate'
                                className='form-control'
                                value={this.state.date}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group row justify-content-center'>
                        <div className="col-md-6">
                            <label for="eventDateInput">Start Time</label>
                            <input
                                type='time'
                                placeholder='Date'
                                name='eventTimeStart'
                                className='form-control'
                                value={this.state.time.start}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group row justify-content-center'>
                        <div className="col-md-6">
                            <label for="eventDateInput">End Time</label>
                            <input
                                type='time'
                                placeholder='Date'
                                name='eventTimeEnd'
                                className='form-control'
                                value={this.state.time.end}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className='form-group'>
                                <input
                                    type='submit'
                                    value="Create"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className='form-group'>
                                <input
                                    type='submit'
                                    value="Cancel"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateSportEvent;