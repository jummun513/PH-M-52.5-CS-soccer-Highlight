import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './FullVideo.css'
import Loading from '../Loading/Loading';

const FullVideo = ({ highlights, loading }) => {

    const { something } = useParams();


    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='full-video'>
                <div>
                    {something}
                </div>

            </div>
        </div>
    );
};

export default FullVideo;