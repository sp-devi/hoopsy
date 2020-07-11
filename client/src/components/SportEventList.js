import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Event lists
class SportEventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sportEvents: []
        }
        console.log('showing all events');
        console.log(props.history.location.state);
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/sportEvent')
            .then(res => {
                this.setState({
                    sportEvents: res.data
                });
            })
            .catch(err => {
                console.log('Error showing listed events');
            })
    };

    render() {
        const events = this.state.sportEvents;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        Event 1
                    </div>
                </div>
            </div >
        );
    }
}

export default SportEventList;