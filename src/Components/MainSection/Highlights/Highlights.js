import React, { useEffect, useState } from 'react';
import Highlight from './Highlight/Highlight';
import './Highlights.css';

const Highlights = () => {

    const [highlights, setHightlights] = useState([]);
    useEffect(() => {
        const url = 'https://www.scorebat.com/video-api/v3/feed/?token=OTEyOTZfMTY4NjM4MDQ3OV9lM2UyOTNiZGM1NmIwYjU1YjM4NTAxZTQ4MDc5YTkzMDk2MWE1ODIz';
        const options = {
            method: 'GET',
            headers: {}
        };
        async function main() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setHightlights(result);
            }
            catch (error) {
                console.error(error);
            }
        }
        main();
    }, []);


    return (
        <div className='highlight mt-20'>
            <h1 className='md:text-center font-bold text-3xl lg:text-4xl ps-3 md:ps-0'>Recent Highlights</h1>
            <div className="card-container grid lg:gap-x-10 lg:gap-y-10 gap-y-10 px-7 lg:px-20 py-10 lg:py-20">
                {
                    highlights.response?.map((highlight, idx) =>
                        <Highlight key={idx} data={highlight}></Highlight>
                    )
                }
            </div>
        </div>
    );
};

export default Highlights;