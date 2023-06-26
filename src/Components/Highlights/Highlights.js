import React, { useEffect, useState } from 'react';
import Highlight from './Highlight/Highlight';
import './Highlights.css';
import Navbar from '../Home/HeaderSection/Navbar/Navbar';
import FooterSection from '../../Components/Home/FooterSection/FooterSection'
import Loading from '../Loading/Loading';
import Pagination from './Pagination/Pagination';

const Highlights = ({ highlights, loading, cardPerPage, totalCard, setCurrentPage }) => {

    if (loading) {
        return <Loading></Loading>
    }

    const bgColor = {
        color: '#000',
    }

    return (
        <div className=''>
            <Navbar bgColor={bgColor}></Navbar>
            <div className='highlight mt-36 lg:mt-44'>
                <h1 className='md:text-center font-bold text-3xl lg:text-4xl ps-3 md:ps-0'>ALL Available Highlights</h1>
                <div className="card-container grid lg:gap-x-10 lg:gap-y-10 gap-y-10 px-7 lg:px-20 py-10 lg:py-16">
                    {
                        highlights?.map((highlight, idx) =>
                            <Highlight key={idx} data={highlight}></Highlight>
                        )
                    }
                </div>
            </div>
            <Pagination cardPerPage={cardPerPage} totalCard={totalCard} setCurrentPage={setCurrentPage}></Pagination>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Highlights;