import React from 'react';
import './Highlight.css';
import playButton from '../../../media/playbutton.png';

const Highlight = (props) => {
    const { competition, date, thumbnail, title } = props.data;
    let play = title.slice(0, 27);
    let host = competition.split(':');
    let dat = date.split('T');
    return (
        <div>
            <div className="card">
                <div class="image">
                    <div className="image1">
                        <img src={thumbnail} alt='' />
                    </div>
                    <div className="overlay"></div>
                    <div className="image2">
                        <img src={playButton} alt='' />
                    </div>
                </div>
                <div className="card-text px-2 py-5">
                    <h3 className='title'>{play.split('-').join('vs')}</h3>
                    <p>{host[1]}</p>
                    <p>Host: {host[0]}</p>
                    <p>Date: {dat[0]}</p>
                </div>
            </div>


        </div>
    );
};

export default Highlight;