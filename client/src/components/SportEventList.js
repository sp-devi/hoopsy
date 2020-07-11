import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Event lists
class SportEventList extends Component {
    constructor() {
        super();

        this.state = {
            event: {}
        }
        console.log('constructor');
    }

    render() {
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