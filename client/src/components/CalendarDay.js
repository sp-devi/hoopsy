import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CalendarDay extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <p>Sun Mon Tue Wed Thu Fri Sat</p>
                    <p>01 02 03 04 05 06 07</p>
                </div>
            </div>
        )
    }
}