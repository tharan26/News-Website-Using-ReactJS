import React from 'react';
import './Header.css';

function Head() {
    return (
        <header>
            <div className="title">
                <p>Chronicle</p>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Markets</a></li>
                    <li><a href="#">Brokers</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
                <div className="search">
                    <input type="search" placeholder="Search Markets Here" />
                </div>
                <div className="rightbar">
                <i class="fa-solid fa-user"></i>
                </div>
            </nav>
        </header>
    );
}

export default Head;
