import React from "react";
import Image from "next/image";
import rahul from "../../assets/images/salon/rahulkolle.png";
import nakul from "../../assets/images/salon/nakul.png";
import "./Speaker.css";

const Speakers = () => {
	return (

		<div className="outer">
            <h1>Speakers</h1>
            <div className="card">           
            <div className="row">
                <div className="column">
                    <Image src={rahul} alt="Rahul Kolle" className="image"></Image>
                </div>

                <section className="column">
                    
                <div className="text">
            A storyteller, a keynote speaker, a business and design
            thinking evangelist-these are just a few adjectives to describe
            Rahul Kolle, the man who inspires people through his 
            scintillating personality. Having had a background in 
            theatre as well as tech, Rahul Kolle has now founded the 
            “Art of Business Storytelling” program leaving a profound mark 
            on working professionals globally, with cohorts in India,
            the USA, Singapore, Portugal, and Poland. From hosting wild live 
            concerts for thousands of rock fans , to delivering workshops for
            Corporate Leaders in the areas of Business Storytelling and 
            Design Thinking , he has spent over 10 years engaging with audiences 
            of all kinds. He is indeed a creative genius who has left a 
            remarkable impact worldwide by motivating people to find the best 
            version of themselves..
            </div>
                </section>
            </div>
            </div>
                <br />
                <br />
            <div className="card">
                <div className="row">
                <div className="column">
                        <Image src={nakul} alt="Nakul Abhyankar" className="image"></Image>
                    </div>
                    <section className="column" >
                        {/* <h2>Nakul Abhyankar</h2> */}
                        <br /><br />
                        <div className="text">
                        Nakul Abhyankar is a music composer, playback singer and sound engineer. 
                        He has worked with renowned musicians such as A.R.Rahman and Raghu Dixit and 
                        also got the opportunity to be a part of A.R. Rahman's jazz band, Nafs. An 
                        alumnus of NIT Surathkal, he spent his years exploring and experimenting with 
                        different genres of music. In the year 2009, he was the title winner of the 
                        famous reality show Sa Re Ga Ma Pa Kannada and finished among the top nine in 
                        Sa Re Ga Ma Pa Hindi. His diverse works and immense passion towards music is 
                        highly inspirational.
                        </div>
                </section>
                </div>
            </div>
        </div>
    )
}

export default Speakers;

