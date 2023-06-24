import React from 'react';
import "./NotFound.css";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const NotFound = ({ loading }) => {

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='not-found'>
                <h5 className='text-xl md:text-4xl text-gray-400 mb-10'>Sorry! Page Not Found - 404.</h5>

                <Link to='/'>
                    <button className='bg-blue-500 text-white p-2 rounded text-sm md:text-base md:font-medium'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default NotFound;