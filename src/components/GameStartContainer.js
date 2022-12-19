import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Home2 from '../pages/Home2';
import Home3 from '../pages/Home3';
import Home4 from '../pages/Home4';
import Search from '../pages/Search';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const GameStartContainer = () => {
    const [currentPage, setCurrentPage] = useState('Signup');

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home/>;
        }
        if(currentPage === 'Home2'){
            return <Home2/>;
        }
        if(currentPage === 'Home3') {
            return <Home3/>;
        }
        if(currentPage === 'Home4'){
            return <Home4/>;
        }
        if(currentPage === 'Search') {
            return <Search handlePageChange={handlePageChange}/>;
        }
        if(currentPage === 'Login') {
            return <Login handlePageChange={handlePageChange}/>;
        }

        return <SignUp/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    );
};

export default GameStartContainer;