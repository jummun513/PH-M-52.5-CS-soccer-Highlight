import React from 'react';
import Highlight from '../../Highlights/Highlight/Highlight';
import { Link } from 'react-router-dom';

const MainSection = ({ highlights }) => {

    const data = highlights.response?.slice(0, 8);

    return (
        <div>
            <div id='recent-highlight' className='mt-20'>
                <h1 className='md:text-center font-bold text-3xl lg:text-4xl ps-3 md:ps-0'>Recent Highlights</h1>
                <div className="card-container grid gap-x-10 gap-y-10 pt-10 px-10 lg:px-14 lg:pt-16 lg:pb-14">
                    {
                        data?.map((highlight, idx) =>
                            <Highlight key={idx} data={highlight}></Highlight>
                        )
                    }
                </div>
                <p className='text-center mb-10'><Link to="/highlights" className="text-2xl hover:underline font-semibold leading-6 text-blue-600">See All <span aria-hidden="true">→</span></Link></p>
            </div>
        </div>
    );
};

export default MainSection;