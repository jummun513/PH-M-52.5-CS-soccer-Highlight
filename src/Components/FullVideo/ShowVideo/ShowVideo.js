import React, { useState } from 'react';
import './ShowVideo.css';
import { useEffect } from 'react';

const ShowVideo = ({ data, part, thumbnail, playThis, nowPlaying }) => {

    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (nowPlaying === data.id) setPlay(true)
        else setPlay(false)
    }, [nowPlaying])

    return (
        <div>
            <div onClick={() => playThis(data.id)} className="small-card mx-auto flex justify-between items-center w-full mt-3 cursor-pointer">
                <img src={thumbnail} alt="" width={'170px'} height={'auto'} />
                {
                    !play ? <div></div> : <div className="now-playing-overlay">Now Playing...</div>
                }
                <div className="card-text text-xl p-1 pe-2 text-left">
                    <p className='font-bold text-black'>Part: {part + 1}</p>
                    <p className='text-gray-400 text-lg'>{data.title}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowVideo;