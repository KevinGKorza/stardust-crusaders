import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Your Games</h1>
            <div className="row">
                <img src={require('../../src/Images/super-mario-bros.webp')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/Super_Mario_Bros._box.png')} height={500} width={400} className="col-sm-6"/>
            </div>
            <div className="row">
                <img src={require('../../src/Images/jp.webp')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/154-1542965_super-mario-bros-nes-box-art-hd-png.png')} height={400} width={500} className="col-sm-6" />
            </div>


        </div>
    );
};

export default Home;