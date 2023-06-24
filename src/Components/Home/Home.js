import React from 'react';
import HeaderSection from './HeaderSection/HeaderSection';
import MainSection from './MainSection/MainSection'
import FooterSection from './FooterSection/FooterSection';

const Home = ({ highlights }) => {

    return (
        <div>
            <HeaderSection></HeaderSection>
            <MainSection highlights={highlights}></MainSection>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;