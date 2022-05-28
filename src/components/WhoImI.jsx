import React, { useEffect } from "react";

const WhoImI = () =>{

    useEffect(()=>{
        const aboutMeAnimatedText = document.querySelector(".about-me-animated");
    
        const options = {
            threshold: 1
        };
        
        const animateOnScroll = new IntersectionObserver((entries, observer)=>{
            entries.forEach(entry =>{
                if(!entry.isIntersecting){
                    return;
                } else{
                    entry.target.classList.add("animated");
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        animateOnScroll.observe(aboutMeAnimatedText);
    },[]);
    

    return(
        <section id="who-im-i">
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="about-me-animated">&lt;WHO I'M I/&gt;</h1>
            </div>
            <div class="content-container">
                <div class="content-header">
                    <h5>Terminal - root@linux:~</h5>
                </div>
                <div class="content">
                    <h4><span class="green">root@linux:<span class="blue">~</span>$</span> — WHO IS AHMED LAMLIH ?</h4>
                    <p>My name is Ahmed LAMLIH, 21 years old, from Morocco. I'm an IT developer, more specifically web oriented developer. I speak 3 languages : Arabic (fluent), French (fluent), English (fluent), and I'm currently learning Spanish.
                    I learned for 2 years on ISGI Marrakech (2019-2021) IT development, but I got started on this domain long ago !</p>
                    <h4><span class="green">root@linux:<span  class="blue">~</span>$</span> — MY VISION</h4>
                    Right now I'm focusing on learning more things, improve and be good at what I do and love, I'm learning online on YouTube and e-learning platforms (check Licenses & certifications section down below) 
                    waiting for continuing my education (my objective is get master degree).
                </div>
            </div>
        </div>
    </section>
    );
}

export default WhoImI;