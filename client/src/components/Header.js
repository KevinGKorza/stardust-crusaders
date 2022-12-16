import React from 'react';
import Navigation from './Navigation';

const Header = (props) => {
    return (
        <header className='container-fluid shadow'>
            <div className='d-flex row'>
                <h1 className='mt-4 pt-2 col'>GameStart</h1>
                <Navigation className="nav pr-5 col" handlePageChange={props.handlePageChange}/>
            </div>
        </header>
    );
};

export default Header;