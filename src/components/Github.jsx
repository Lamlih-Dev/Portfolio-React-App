import React from "react";
import Image1 from "../images/GitHub-Mark.png";
import Image2 from "../images/github background 2.png";

const Github = () =>{
    return(
        <section id="github">
            <div class="row">
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-right">Welcome to my GitHub Page</h1>
                    <p data-aos="fade-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, doloremque expedita. Natus temporibus voluptatibus minima in, optio quod quae adipisci laudantium odio enim delectus nemo beatae impedit distinctio excepturi inventore?</p>
                    <span>
                        <a href="https://github.com/Lamlih-Dev" data-aos="fade-right" target="_blank">
                            <div class="container">
                                <img src={Image1} alt="Github Mark" width="30px" height="30px" />
                                CHECK MY GITHUB PAGE
                            </div>
                        </a>
                    </span>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <img data-aos="fade-left" class="main-img" src={Image2} alt="github" />
                </div>
            </div>
        </section>
    );
}

export default Github;