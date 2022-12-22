import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import WideCard from '../components/WideCard';

import momenday_logo from '../assets/resources/logos/momenday.png';
import chart from '../assets/resources/logos/chart.png';
import xcept from '../assets/resources/logos/xcept.png';

class Experience extends Component {
    render () {
        return (
            <Container>
                <div className='expedu_section'>
                    <h1 className='pagesubhead'>Work Experience</h1>

                    <WideCard 
                        image={momenday_logo} 
                        text={[
                            `Frontend Software Engineer`,<br/>,
                            `Momenday Technology Limited, Hong Kong` ,<br/>,
                            `Momenday is a Hong Kong local entertainment activities inquiry platform. It currently has 100+ unforgettable entertainment activities for the public, companies, and schools to plan and organize various activities.
                            `,<br/>,`
                            - Developed several pages for corporate users and customers for sending their requests to the system. `,<br/>,`- Improved the design of the website by making it responsive, user-friendly, and functional.
                            `,<br/>,`- Made webpages in several languages by using i18n.
                            `,<br/>,`- Applied stacks: ReactJS, HMTL, CSS, Typescript, and Firebase.`
                        ]}
                    />
                    <WideCard 
                        image={chart} 
                        text={[
                            `Frontend Developer  `,<br/>,`Chartipedia, Finland `,<br/>,`
                            - Startup company that launched a data visualization content sharing platform which brings together creators, readers, educators, and corporates. `,<br/>,`
                            - Refactored the code for several pages `,<br/>,`
                            - Improved the design of one page `,<br/>,`
                            - Applied stacks: NextJS, HTML, and CSS.
                            `
                        ]}
                    />
                    <WideCard 
                        image={xcept} 
                        text={[
                            `Software Engineer `,<br/>,`
                            XCEPT Limited, Hong Kong`,<br/>,`
                            - XCEPT is a hybrid innovative studio, crafting unique experience at the junction of art, technology, design & culture. The company creates tailor-made and high-end innovations to tell brand stories without loss intranslation, harnessing every medium with our most authentic ideas. `,<br/>,`
                            - Developed the base of the web mobile application based on the object-recognition model. `,<br/>,`
                            - Developed the 3d world with a responsive style `,<br/>,`
                            - Applied stacks: ReactJS, HTML, CSS, Python, and Three.js`
                        ]}
                    />
                </div>
                <div className='expedu_section mb-0'>
                    <h1 className='pagesubhead'>Education</h1>

                    <h2>BSc in Computer Science </h2>
                    <p>HKBU 2019-2023</p>
                </div>
            </Container>
        )
    }
}

export default Experience;