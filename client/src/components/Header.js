import React from "react";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Header = () => {
    return (
        <header>
            <h1>GameStart</h1>
            <form>
                <input type="text" name="search" placeholder="Search to your heart content"/>
                <br/>
                <input type="button" name="searchBtn" value="Click me"/>
            </form>
            {/* <LoginForm/>
            <SignupForm/> */}
        </header>

    );
};

export default Header;