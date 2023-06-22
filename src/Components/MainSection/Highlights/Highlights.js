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

    console.log(highlights.response);

    return (
        <div className='highlight mt-20'>
            <h1 className='text-center font-bold text-4xl'>Recent Highlights</h1>
            <div className="card-container grid gap-x-10 gap-y-10 px-20 py-20">
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