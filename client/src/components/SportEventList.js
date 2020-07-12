import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Event lists
class SportEventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sportEvents: props.history.location.state
        }
        console.log('showing all events');
        console.log(props.history.location.state);
    }

    render() {
        const events = this.state.sportEvents;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                       {events.detail[0].city}
                       {events.detail[1].city}
                    </div>
                </div>
            </div >
        );
    }
}

export default SportEventList;