import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SportEventItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: props.sportEvent
        }

    };

    render() {
        return (
            <div className="row justify-content-center event-container">
                <div className="col-md-8">
                    <h4>
                        {this.state.event.eventName}
                    </h4>
                    <h3>
                        {this.state.event.eventAddress}
                    </h3>
                    <p>
                        {this.state.event.cityName}
                    </p>
                </div>
            </div>
        );
    };
}

export default SportEventItem;