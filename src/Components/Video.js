import React from 'react';
import './Video.css';
import vid1 from './Assets/14003675-hd_1280_720_60fps.mp4';

function Video() {
    return (
        <div className="container">
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    Welcome to <strong>Chronicle</strong>—where experience meets insight. As seasoned traders, we know the markets inside out, and we're here to share that knowledge with you. From the ups and downs of the stock market to the ever-evolving world of cryptocurrency, we bring you the sharpest analysis and the most relevant news.
                </p>
                <p>
                    We've been in the trenches, weathered the storms, and seized the opportunities. Our goal is to arm you with the same expertise and understanding that drives successful trading. Whether you're navigating your first investment or refining your strategy, <strong>Chronicle</strong> is your go-to resource for staying ahead of the curve.
                </p>
                <p>
                    Join us, and trade with confidence—because knowledge is your most powerful asset.
                </p>
            </div>
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Video;
