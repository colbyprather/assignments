import React, { Component } from 'react';
import "./homeStyles.css"
import Vtrade from "./vtrade.jpg"
import Vtrade2 from "./vtrade2.jpg"
import Vtrade3 from "./vtrade3.jpg"

class Home extends Component {

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
    render () {
        return (
            <div>
                <h1 className="textTop">Projects</h1>
                <div className="layout">
                    <div className="boxHolder">
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                            <div class="numbertext">1 / 3</div>
                            <img src={Vtrade} alt="Home Page" style={{width: "100%"}}></img>
                            <div class="text">Caption Text</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">2 / 3</div>
                            <img src={Vtrade2} alt="Camping Page" style={{width: "100%"}}></img>
                            <div class="text">Caption Two</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">3 / 3</div>
                            <img src={Vtrade3} alt="Posting Page" style={{width: "100%"}}></img>
                            <div class="text">Caption Three</div>
                        </div>
                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>
                        </div>
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <span class="dot" onclick="currentSlide(1)"></span>
                            <span class="dot" onclick="currentSlide(2)"></span>
                            <span class="dot" onclick="currentSlide(3)"></span>
                        </div>
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
