import React from "react";

const Footer = () =>{
    return(
        <section id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <a class="navbar-brand" href="#">
                            <span>AHMED LAMLIH</span>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <div class="navigation text-center">
                            <a class="nav-link" href="#">Home</a>
                            <a class="nav-link" href="#who-im-i">Who I'm I</a>
                            <a class="nav-link" href="#github">GitHub</a>
                            <a class="nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright text-center">
                <p>copyright©2022 - All Right Reserved</p>
            </div>
        </section>
    );
}

export default Footer;