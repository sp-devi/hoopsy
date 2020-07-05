import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FindEventByCity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {}
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/user')
            .then(res => {
                this.setState({
                    event: res.data
                })
            })
            .catch(err => {
                console.log('Error showing User');
            })
    };

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
                                type='button'
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

