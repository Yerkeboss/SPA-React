import React, { Component } from 'react';

import Social from '../components/Social';

class Contact extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>Please don’t hesitate to reach out if you have any questions about my background.</h1>
                <p>
                I look forward to the opportunity to speak with you further; thank you for your time and consideration.
                </p>

                <div className="sendMail">
                    <a href="mailto: yerkegali.official@gmail.com">
                        <i className='bx bx-envelope' ></i> yerkegali.official@gmail.com
                    </a>
                    <div>
                        <i className='bx bx-map'></i> Hong Kong, Kowloon Tong
                    </div>
                </div>
                <Social/>
            </div>
        );
    }
}

export default Contact;