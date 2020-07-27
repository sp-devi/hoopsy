import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class Calendar extends Component {
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

    render() {
        return (
            <div>
                
            </div>
        )
    }
}