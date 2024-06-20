import React from "react";
import './Carousal.css';

const Carousal = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousal-fade"  data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/assets/1.jpg" className="d-block w-100" alt="Slide 1"/>
                    <div className="carousel-caption d-none d-md-block">
                        <div className="billboard-content">
                            <h1 className="billHead">Stranger Things</h1>
                            <p>Season 5 | Coming out?</p>
                            <div className="billbutton">
                                <button>Watch now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/2.jpg" className="d-block w-100" alt="Slide 2"/>
                    <div className="carousel-caption d-none d-md-block">
                    <div className="billboard-content">
                            <h1 className="billHead">Deadpool & Wolverine</h1>
                            <p>Official Teaser | In Theaters July 26</p>
                            <div className="billbutton">
                                <button>Watch now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/3.jpg" className="d-block w-100" alt="Slide 3"/>
                    <div className="carousel-caption d-none d-md-block">
                    <div className="billboard-content">
                            <h1 className="billHead">JOKER</h1>
                            <p>Violent • Psychological • Thriller </p>
                            <div className="billbutton">
                                <button>Watch now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/4.jpg" className="d-block w-100" alt="Slide 3"/>
                    <div className="carousel-caption d-none d-md-block">
                    <div className="billboard-content">
                            <h1 className="billHead">Insidious: The Red Door</h1>
                            <p>CBFC: A 2023 • Horror/Mystery • 1h 47m
                            </p>
                            <div className="billbutton">
                                <button>Watch now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousal;
