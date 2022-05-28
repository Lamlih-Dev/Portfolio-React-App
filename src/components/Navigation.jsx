import React from "react";

const Navigation = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-ligh">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <span>AHMED LAMLIH</span>
                </a>          
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto text-center">
                <a class="nav-link" href="#">Home</a>
                <a class="nav-link" href="#who-im-i">Who I'm I</a>
                <a class="nav-link" href="#github">GitHub</a>
                <a class="nav-link" href="#contact">Contact</a>
                </div>
            </div>
            </div>
        </nav>
    );
}   

export default Navigation;