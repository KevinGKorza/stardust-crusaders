import React from "react";

const Navigation = (props) => {
    return (
        <nav>
            <ul className={props.className}>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Home" onClick={() => props.handlePageChange('Home')}>Home</a>
                </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Search" onClick={() => props.handlePageChange('Search')}>Search</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Login" onClick={() => props.handlePageChange('Login')}>Login</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Signup" onClick={() => props.handlePageChange('Signup')}>Signup</a>
                    </li>
            </ul>
        </nav>
    );
};

export default Navigation;