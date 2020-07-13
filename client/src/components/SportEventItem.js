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
                <div className="col-md-4">
                    <h4>
                        {this.state.event.eventName}
                    </h4>
                    <p>
                        {this.state.event.city}
                    </p>
                </div>

            </div>
        );
    };
}

export default SportEventItem;