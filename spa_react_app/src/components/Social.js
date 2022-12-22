import React, { Component } from 'react';

import '../assets/scss/social.scss';

class Social extends Component {
    render() {
        return (
            <div className='social'>
                <a href="https://github.com/Yerkeboss" target="_blank">
                    <i className='bx bxl-github'></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <i className='bx bxl-instagram' ></i>
                </a>
                <a href="https://www.linkedin.com/in/yerkegali-zhamalbekov-57b748225/" target="_blank">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
            </div>
        )
    }
}

export default Social;