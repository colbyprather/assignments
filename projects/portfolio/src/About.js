import React from 'react';
import './aboutStyles.css';

const About = () => {
    return (
        <div>
            <div className='picContainer'>
                <img className='picOfMe' src="http://www.focustalentmgmt.com/uploads/9/4/0/4/9404157/colby-prather-main_orig.jpg" alt='Me'></img>
            </div>
            <div className="textContainer">
                <p className="ptext">I'm Colby Prather. I'm the type of person that likes to build something and be able to see it. With web design I im able to do both. I love the challenge when trying to design somthing new that I've never done before learning new things and with web development theres always something new to learn. Then being able to see the final project after putting in all that work and knowing that so many other people will too.</p>
                <hr style={{width: "90%"}}></hr>
                <h2 className="textFont">Skills - </h2>
                <h4 className="textFont">HTML</h4>
                <h4 className="textFont">CSS</h4>
                <h4 className="textFont">React</h4>
                <h4 className="textFont">NodeJS</h4>
                <hr style={{width: "90%"}}></hr>
                <h2 className="textFont">Contact Info</h2>
                <h4 className="textFont">Phone: <a>801-885-3325</a></h4>
                <h4 className="textFont">Email: Colbynash01@gmail.com</h4>
            </div>
        </div>
    );
};

export default About;