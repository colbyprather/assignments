import React, { Component } from 'react';
import "./homeStyles.css"
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Vtrade from "./vtrade.jpg"
import Vtrade2 from "./vtrade2.jpg"
import Vtrade3 from "./vtrade3.jpg"

class Home extends Component {
    
    render () {
        const width = '300px', height='150px';
        const Container = styled.div`
        border: 1px solid black;
        margin: 10px 10px 10px 15%;
        position: relative;
        overflow: hidden;
        width: ${width};
        `;
        const Children  = styled.div`
        width: ${width};
        position: relative;
        height: 175px;
        `;
        const Arrow = styled.div`
        text-shadow: 1px 1px 1px #fff;
        z-index: 100;
        line-height: ${height};
        text-align: center;
        position: absolute;
        top: 0;
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
        text-align: center;
        width: ${width};
        z-index: 100;
        `;
        const CarouselUI = ({ position, total, handleClick, children }) => (
        <Container>
            <Children>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
            </Children>
            <Dots>
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
                            {/* <h1>Slide 1</h1>
                            <p>Slide Description</p> */}
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <img className="images" src={Vtrade2} alt="screenshot"></img>
                            {/* <h1>Slide 2</h1>
                            <p>Slide Description</p> */}
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <img className="images" src={Vtrade3} alt="screenshot"></img>
                            {/* <h1>Slide 3</h1>
                            <p>Slide Description</p> */}
                        </div>
                        </Slide>
                    </Carousel>
                        {/* <img className="images" src={Vtrade} alt="screenshot"></img> */}
                        <a className="viewButton" href={"https://vtrade.herokuapp.com/"} target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                    <div className="boxHolder">
                        hello
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;