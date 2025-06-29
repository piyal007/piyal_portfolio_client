import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BackToTop from '../Components/BackToTop/BackToTop';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Main = () => {
    useDocumentTitle('Portfolio | Home');
    
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <BackToTop />
        </>
    );
};

export default Main;