import React from 'react';
import HeaderSection from './HeaderSection/HeaderSection';
import MainSection from './MainSection/MainSection'
import FooterSection from './FooterSection/FooterSection';
import Loading from '../Loading/Loading';

const Home = ({ highlights, loading }) => {

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <HeaderSection></HeaderSection>
            <MainSection highlights={highlights}></MainSection>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;