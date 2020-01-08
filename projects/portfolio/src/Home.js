import React, { Component } from 'react';
import "./homeStyles.css"
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Vtrade from "./vtrade.jpg"
import Vtrade2 from "./vtrade2.jpg"
import Vtrade3 from "./vtrade3.jpg"
import Slick from "./slickkicks.jpg"
import Slick2 from "./slickkicks2.jpg"
import Slick3 from "./slickkicks3.jpg"


class Home extends Component {
    
    render () {
        const height='150px';
        const Container = styled.div`
        border: 1px solid black;
        margin: 10px 10px 10px 8%;
        position: relative;
        overflow: hidden;
        // width: 500px;
        width: 85%;
        `;
        const Children  = styled.div`
        // width: 500px;
        // width: 100%;
        // position: relative;
        // height: 275px;
        `;
        const Arrow = styled.div`
        text-shadow: 1px 1px 1px #fff;
        z-index: 100;
        line-height: ${height};
        text-align: center;
        position: absolute;
        width: 10%;
        font-size: 3em;
        cursor: pointer;
        user-select: none;
        color: black;
        ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
        `;
        const Dot = styled.span`
        font-size: 1.5em;
        cursor: pointer;
        text-shadow: 1px 1px 1px #fff;
        user-select: none;
        `;
        const Dots = styled.span`
        z-index: 100;
        display: block;
        margin-left: auto;
        margin-right: auto;
        `;
        const CarouselUI = ({ position, total, handleClick, children }) => (
        <Container>
            <Children className="childrenBox">
            {children}
            <Arrow className="arrows" onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
            <Arrow right className="arrows" onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
            </Children>
            <Dots className="dots">
            {Array(...Array(total)).map( (val, index) =>
                <Dot key={index} onClick={handleClick} data-position={index}>
                {index === position ? '● ' : '○ ' }
                </Dot>
            )}
            </Dots>
        </Container>
        );
        const Carousel = makeCarousel(CarouselUI);
        return (
            <div>
                <h1 className="textTop">Projects</h1>
                <div className="layout">
                    <div className="boxHolder">
                    <Carousel>
                        <Slide right>
                        <div>
                            <img className="images" src={Vtrade} alt="screenshot"></img>
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <img className="images" src={Vtrade2} alt="screenshot"></img>
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <img className="images" src={Vtrade3} alt="screenshot"></img>
                        </div>
                        </Slide>
                    </Carousel>
                        <a className="viewButton" href={"https://vtrade.herokuapp.com/"} target="_blank" rel="noopener noreferrer">View</a>
                        {/* <p>This was a group projet we made while in Vschool. It's just made so you can go on and make a post to sell your old outdoor gear you no longer need.</p> */}
                    </div>
                    <div className="boxHolder">
                    <Carousel>
                        <Slide right>
                        <div>
                            <img className="images" src={Slick} alt="screenshot"></img>
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <img className="images" src={Slick2} alt="screenshot"></img>
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <img className="images" src={Slick3} alt="screenshot"></img>
                        </div>
                        </Slide>
                    </Carousel>
                    <a className="viewButton" href={"http://slickkicks.surge.sh/"} target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;