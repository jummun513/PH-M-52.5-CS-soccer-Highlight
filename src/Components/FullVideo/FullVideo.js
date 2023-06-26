import * as React from 'react';
import { useParams } from 'react-router-dom';
import './FullVideo.css'
import Loading from '../Loading/Loading';
import ShowVideo from './ShowVideo/ShowVideo';
import './FullVideo.css';
import { useState } from 'react';
import playButton from '../../media/playbutton.png';
import NotFound from '../NotFound/NotFound';
import Navbar from '../Home/HeaderSection/Navbar/Navbar'


const FullVideo = ({ highlights, loading }) => {

    const { something } = useParams();  // take id of video from url

    const showVideo = highlights?.response?.find(data => (data.id === parseInt(something)));
    const [nowPlaying, setNowPlaying] = useState(showVideo?.videos[0]);


    if (loading) {
        return <Loading></Loading>
    }


    const playThis = (st) => {
        showVideo?.videos.filter(data => (data.id === st) && setNowPlaying(data));
    }

    // parse html tag from povided property value 
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(nowPlaying?.embed, 'text/html');
    const url = htmlDocument?.querySelector('iframe')?.src;


    // console.log(!!showVideo);

    return (
        <div>
            <Navbar></Navbar>
            {
                !showVideo ? <NotFound /> : (
                    <div className='full-video flex justify-between'>
                        <div className="play-video w-3/5">
                            <a href={url}>
                                <div className="image1">
                                    <img src={showVideo?.thumbnail} alt="" />
                                </div>
                                <div className="image2">
                                    <img src={playButton} alt='' />
                                </div>
                            </a>
                        </div>
                        <div className="suggested w-2/5 text-center">
                            <h1 className='text text-2xl py-2 font-semibold'>Related Videos</h1>
                            <div className='card-container'>
                                {
                                    showVideo?.videos?.map((data, idx) => <ShowVideo key={idx} nowPlaying={nowPlaying.id} playThis={playThis} thumbnail={showVideo.thumbnail} gameTitle={showVideo.title} data={(data)} part={idx}></ShowVideo>)
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default FullVideo;