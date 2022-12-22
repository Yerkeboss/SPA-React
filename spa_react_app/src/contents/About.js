import React, { Component } from 'react';

import Skills from '../components/Skills';

class About extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>About me</h1>
                <p>
                I, Yerkegali, am an outstanding student, who is really into spending time for self-development, and I cannot stand wasting time on useless things.
                </p>
                <p>
                Moreover, my greatest passion in life is using my technical know-how to benefit other people and organizations.
                As an upcoming graduate from Hong Kong Baptist University with a B.S. in Computer Science, I’m confident that my knowledge of Frontend Software development, experience in ReactJs with Typescript and Python, and precise attention to detail would make me an asset to the team at any company.  
                </p>

                <div className='skills'>
                    <p>My professional skillset include : </p>
                    
                    <div className='d-flex flex-wrap'>
                        <Skills />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;