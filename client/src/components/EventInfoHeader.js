import React, { Component } from 'react';
import '../App.css';

class EventInfoHeader extends Component {
    constructor() {
        super();
        this.state = {
            event : {
                address: '',
                dateTimeInfo : {
                    date: '',
                    timeStart: '',
                    timeEnd: ''
                }
            }
        };
    }

    render() {
        return() {
            <div>
                {/* Event info summary */}
                {/* Date */}
                {/* Time Start and/or end */}
                {/* Address */}
            </div>
        }
    }
}

export default EventInfoHeader;