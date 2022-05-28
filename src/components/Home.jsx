import React from "react";
import Image1 from "../images/img1.png";
import Image2 from "../images/html.svg";
import Image3 from "../images/css.png";
import Image4 from "../images/react.svg";

const Home = () =>{
    return(
        <section id="home">
            <div class="container">
                <div class="row text-white">
                    <div class="col-md-6 d-flex flex-column justify-content-center">
                        <h4 data-aos="fade-right" data-aos-delay="300">&lt; <span>Hi There</span>  /&gt;</h4>
                        <h1 data-aos="fade-right" data-aos-delay="600">I'M <span>AHMED LAMLIH !</span></h1>
                        <p data-aos="fade-right" data-aos-delay="700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et dolores rem obcaecati quisquam magni quos molestias aliquam cum quia quod reprehenderit, porro atque odio fugiat? Tenetur laborum necessitatibus quis.</p>
                        <span data-aos="fade-right" data-aos-delay="800">
                            <a href="#who-im-i" >
                                <span class="coding-tags">&lt;</span>
                                Know More About Me
                                <span class="coding-tags">/&gt;</span>
                            </a>
                        </span>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center" data-aos="fade-left">
                        <img class="main-img" src={Image1} alt="" />
                        <img class="sub sub2" src={Image2} alt="" />
                        <img class="sub sub1" src={Image3} alt="" />
                        <img class="sub sub3" src={Image4} alt="" />
                    </div>
                </div>
            </div>
            <svg id="wave" style={{transform:"rotate(0deg)",transition: "0.3s"}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)",opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,60L12,61.7C24,63,48,67,72,63.3C96,60,120,50,144,45C168,40,192,40,216,40C240,40,264,40,288,35C312,30,336,20,360,16.7C384,13,408,17,432,23.3C456,30,480,40,504,51.7C528,63,552,77,576,83.3C600,90,624,90,648,90C672,90,696,90,720,90C744,90,768,90,792,85C816,80,840,70,864,63.3C888,57,912,53,936,58.3C960,63,984,77,1008,83.3C1032,90,1056,90,1080,75C1104,60,1128,30,1152,26.7C1176,23,1200,47,1224,46.7C1248,47,1272,23,1296,23.3C1320,23,1344,47,1368,56.7C1392,67,1416,63,1440,66.7C1464,70,1488,80,1512,83.3C1536,87,1560,83,1584,70C1608,57,1632,33,1656,25C1680,17,1704,23,1716,26.7L1728,30L1728,100L1716,100C1704,100,1680,100,1656,100C1632,100,1608,100,1584,100C1560,100,1536,100,1512,100C1488,100,1464,100,1440,100C1416,100,1392,100,1368,100C1344,100,1320,100,1296,100C1272,100,1248,100,1224,100C1200,100,1176,100,1152,100C1128,100,1104,100,1080,100C1056,100,1032,100,1008,100C984,100,960,100,936,100C912,100,888,100,864,100C840,100,816,100,792,100C768,100,744,100,720,100C696,100,672,100,648,100C624,100,600,100,576,100C552,100,528,100,504,100C480,100,456,100,432,100C408,100,384,100,360,100C336,100,312,100,288,100C264,100,240,100,216,100C192,100,168,100,144,100C120,100,96,100,72,100C48,100,24,100,12,100L0,100Z"></path></svg>
        </section>
    );
}

export default Home;