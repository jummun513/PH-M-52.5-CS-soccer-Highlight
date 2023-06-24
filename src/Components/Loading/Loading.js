import React from 'react';
import './Loading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    return (
        <div>
            <div className='Loading'>
                <h2 className='text-2xl'>Loading</h2>
                <p className='text-3xl ms-3'><FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon></p>
            </div>
        </div>
    );
};

export default Loading;