import {HeroData} from "./HeroData";
import "./Hero.css";

function Hero() {
    return (
        // <section id="hero">
            <div class="hero-content container text-center">
                <div class="hero-text row align-items-center">
                    <div class="col">
                        <p>Hello I'm</p>
                        <h1>{HeroData.name}</h1>
                        <span class="hero-role"><h2>{HeroData.role}</h2></span>
                        <p>{HeroData.description}</p>
                        <button className="cta-button btn btn-outline-info">{HeroData.cta}</button>
                    </div>
                    <div class="col">
                        {/* <img src={HeroData.image} alt={HeroData.name} /> */}
                    </div>
                </div>
            </div>
        // </section>
    );
};

export default Hero;