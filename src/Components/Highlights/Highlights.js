import React, { useEffect, useState } from 'react';
import Highlight from './Highlight/Highlight';
import './Highlights.css';
import Navbar from '../Home/HeaderSection/Navbar/Navbar';

const Highlights = ({ highlights }) => {

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='highlight mt-36'>
                <h1 className='md:text-center font-bold text-3xl lg:text-4xl ps-3 md:ps-0'>ALL Available Highlights</h1>
                <div className="card-container grid lg:gap-x-10 lg:gap-y-10 gap-y-10 px-7 lg:px-20 py-10 lg:py-20">
                    {
                        highlights.response?.map((highlight, idx) =>
                            <Highlight key={idx} data={highlight}></Highlight>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Highlights;