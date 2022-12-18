import React from "react";

const Home3 = () => {
    return (
        <div>
            <h1>Your Games</h1>
            <div className="row">
                <img src={require('../../src/Images/z5p1CPfhzrRxMWSN0k4V6ZGDvADYnh3x.webp')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/960x0.jpg')} height={500} width={400} className="col-sm-6"/>
            </div>
            <div className="row">
                <img src={require('../../src/Images/26583-call-of-duty-windows-front-cover.jpg')} height={500} width={400} className="col-sm-6"/>
                <img src={require('../../src/Images/call-of-duty-black-ops-3-cover-i32821')} height={400} width={500} className="col-sm-6" />
            </div>


        </div>
    );
};

export default Home3;