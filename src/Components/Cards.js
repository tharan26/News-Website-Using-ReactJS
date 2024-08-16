import React from 'react';
import './Cards.css';
import image1 from './Assets/Screenshot 2024-08-14 122818.png';
import image2 from './Assets/pexels-davidmcbee-730564.jpg';
import image3 from './Assets/behnam-norouzi-hScr17JG74Q-unsplash.jpg';

function Cards() {
    return (
        <div class="cards">
            <div className='cd'>
            <img src={image1} class="card" alt='image1' />
            <p class="text1">Stock Market Soars to Record Highs Amid Tech Rally</p>
            <p className='text2'>The stock market reached unprecedented levels today as technology stocks led a powerful rally. Investors are optimistic about the future of AI and renewable energy, driving major indices to new highs. Analysts warn, however, that the market's volatility could mean sudden corrections.</p>
            </div>
            <div className='cd'>
            <img src={image2} class="card" alt='image2' />
            <p class="text1">Bitcoin Breaks $60,000 Barrier, Investors Eye Future Gains</p>
            <p className='text2'>Bitcoin surged past the $60,000 mark for the first time this year, reigniting the debate over its long-term value. The cryptocurrency's rise is attributed to growing institutional interest and a weakening US dollar. Experts caution that the path forward may still be fraught with regulatory challenges.</p>
            </div>
            <div className='cd'>
            <img src={image3} class="card" alt='image3' />
            <p class="text1">Federal Reserve Hints at Interest Rate Pause</p>
            <p className='text2'>The Federal Reserve indicated that it may pause its interest rate hikes, leading to a surge in market optimism. The central bank’s decision is seen as a response to slowing inflation and concerns over economic growth. This move could provide a much-needed boost to sectors like housing and consumer goods.</p>
            </div>
        </div>
    );
}

export default Cards;
