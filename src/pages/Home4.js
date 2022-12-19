import React from "react";

const Home4 = () => {
    return (
        <div>
            <h1>Your Games</h1>
            <div className="row">
                <img src={require('../../src/Images/190517-fallout-dos-front-cover.jpg')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/FO2_manual_cover.webp')} height={500} width={400} className="col-sm-6"/>
            </div>
            <div className="row">
                <img src={require('../../src/Images/Fallout_3_cover_art.webp')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/Fallout_4_box_cover.webp')} height={400} width={500} className="col-sm-6" />
            </div>


        </div>
    );
};

export default Home4;