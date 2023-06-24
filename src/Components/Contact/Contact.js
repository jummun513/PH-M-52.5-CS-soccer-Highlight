import React from 'react';
import Navbar from '../Home/HeaderSection/Navbar/Navbar';
import Loading from '../Loading/Loading';

const Contact = ({ loading }) => {

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='relative top-28 text-5xl'>Contact is under monitoring.</h1>
        </div>
    );
};

export default Contact;