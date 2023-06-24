import React from 'react';
import "./NotFound.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='not-found'>
                <h5 className='text-xl md:text-4xl text-gray-400 mb-10'>Sorry! Page Not Found - 404.</h5>

                <Link to='/'>
                    <button className='bg-blue-500 text-white p-1 text-sm md:p-3 md:font-medium'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default NotFound;