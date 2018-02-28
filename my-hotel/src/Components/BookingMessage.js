import React from 'react';
import { Component } from 'react';

const time = new Date().toLocaleTimeString();

class BookingMessage extends Component {
    render() {
        return (
            <div>
                <p> There are booking available for {time} </p>
            </div>
        )
    }
}


export default BookingMessage;

