import React from 'react';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';
import MainCafeContent from './content/main-cafe-content';

const MainCafe = () => {

    return (
        <div>
            <Nav current='main' />
            <MainCafeContent />
            <Footer />
        </div>
    );
};

export default MainCafe;