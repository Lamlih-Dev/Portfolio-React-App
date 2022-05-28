import React, { useState } from "react";
import EmailJs from "emailjs-com";

const Contact = () =>{

    const [loading, isLoding] = useState(false);

    const sendMail = async (e) => {
        e.preventDefault();
        try{
            isLoding(true)
            const result = await EmailJs.sendForm(
                "portfolio-email-sender",
                "template_y5uzewj",
                e.target,
                "b5eN0hPazPNX45mX1"
           );
           isLoding(false);
           document.getElementById("form").reset();
           alert("Message was sent successfully !");
        }catch(error){
            alert("Error: "+error);
        }
    };

    return(
        <section id="contact">
            <div class="container" data-aos="fade-right">
                <h1>CONTACT ME &lt;/&gt;</h1>
                <h3>LET'S WORK TOGETHER</h3>
                <p>Im available to make collaborations with other devs and/or work on theire projects as 
                    soon as possible. Leave me a message to catch up !
                </p>
                <form id="form" data-aos="fade-right" onSubmit={sendMail}>
                    <div class="row">
                        <div class="col-md-6 d-flex flex-column justify-content-between">
                            <div class="input-data">
                                <input id="first-name" name="first-name" type="text" autocomplete="off" required />
                                <div class="underline"></div>
                                <label>First Name</label>
                            </div>
                            <div class="input-data">
                                <input id="last-name" name="last-name" type="text" autocomplete="off" required />
                                <div class="underline"></div>
                                <label>Last Name</label>
                            </div>
                            <div class="input-data">
                                <input id="email" name="email" type="text" autocomplete="off" required />
                                <div class="underline"></div>
                                <label>Email</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="textarea-data">
                                <textarea id="message" name="message" cols="40" rows="10" autocomplete="off" required></textarea>
                                <div class="underline"></div>
                                <label>Type Your Message Here</label>
                            </div>
                        </div>
                    </div>
                    {loading ? <div class="loader"></div> : <button class="btn-submit" type="submit">CONTACT NOW</button>}
                </form>
            </div>
        </section>
    );
}

export default Contact;