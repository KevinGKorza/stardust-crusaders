import React from "react";

const Home2 = () => {
    return (
        <div>
            <h1>Your Games</h1>
            <div className="row">
                <img src={require('../../src/Images/Zelda-NES-Box-Art.png')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/541221-the-legend-of-zelda-breath-of-the-wild-nintendo-switch-front-cover.jpg')} height={500} width={400} className="col-sm-6"/>
            </div>
            <div className="row">
                <img src={require('../../src/Images/241998-the-legend-of-zelda-skyward-sword-wii-front-cover.jpg')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/550w_gaming_zelda3d_boxart.jpg')} height={400} width={500} className="col-sm-6" />
            </div>


        </div>
    );
};

export default Home2;