import React from 'react';
import './FooterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube, fab } from '@fortawesome/free-brands-svg-icons';


const FooterSection = () => {
    return (
        <div>
            <div className='footer md:flex text-center md:text-left justify-between py-8 px-10 lg:mt-24'>
                <div className="text">
                    <p>&copy; All Rights Reserver 2023.</p>
                    <p>Developed By Jummun Islam.</p>
                </div>
                <div className="icon mt-4 md:mt-0">
                    <p>Follow me:</p>
                    <p className='text-2xl'>
                        <FontAwesomeIcon className='me-3 cursor-pointer' icon={faFacebook} />
                        <FontAwesomeIcon className='me-3 cursor-pointer' icon={faYoutube} />
                        <FontAwesomeIcon className='me-3 cursor-pointer' icon={faTwitter} />
                        <FontAwesomeIcon className='cursor-pointer' icon={faLinkedin} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;