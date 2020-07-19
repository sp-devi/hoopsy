import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SportEventItem from './SportEventItem';

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
        const dat = [{
            cityName: 'nagoya',
            eventName: 'ian event',
            eventAddress: 'nakagawa lifelearning center'
        }, {
            cityName: 'nagoya',
            eventName: 'taku event',
            eventAddress: 'moriyama lifelearning center'
        }]

        let eventList = dat.map((event) =>
            <SportEventItem sportEvent={event}></SportEventItem>
        )

        return (
            <div className="container create-event-container">
                {eventList}
            </div >
        );
    }
}

export default SportEventList;