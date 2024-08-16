import React, { useState, useEffect } from 'react';
import './Cover.css';
import img1 from './Assets/pixelcut-export.png';

function Cover() {
    const [showAmount, setShowAmount] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowAmount((prev) => !prev);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='cover'>
            <img src={img1} alt="Cover" />
            <div className='coverbt'>
                <button>
                    BTCUSD
                    <br />
                    {showAmount ? "$50,000" : <span className="profit">+2.5%</span>}
                </button>
                <button>
                    NIFTY
                    <br />
                    {showAmount ? "₹15,000" : <span className="loss">-1.3%</span>}
                </button>
                <button>
                    NASDAQ
                    <br />
                    {showAmount ? "$14,000" : <span className="profit">+0.8%</span>}
                </button>
            </div>
            <h1>"Unraveling the Markets, One Story at a Time"</h1>
            <h3>Join 60 million traders and investors taking the future into their own hands.</h3>
        </div>
    );
}

export default Cover;
