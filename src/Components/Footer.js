import React, { Component } from "react";
import './Footer.css';

class Foot extends Component{
    render(){
        return(
            <div class="foot2">
            <footer>
                <div>
                    <h3>CHRONICLE</h3>
                    <div className="icons">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-discord"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
                <div class="footlist">
                <ul id="list1">
                    <li class="heading">Products</li>
                    <li>Supercharts</li>
                    <li>Pine Script™</li>
                    <li>Stock Screener</li>
                    <li>ETF Screener</li>
                    <li>Forex Screener</li>
                    <li>Crypto Coins Screener</li>
                    <li>Crypto Pairs Screener</li>
                    <li>DEX Pairs Screener</li>
                    <li>Stock Heatmap</li>
                    <li>ETF Heatmap</li>
                    <li>Crypto Heatmap</li>
                    <li>Economic Calendar</li>
                </ul>
                <ul id="list2">
                    <li class="heading">Company</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Social network</li>
                    <li>Wall of Love</li>
                    <li>Athletes</li>
                    <li>Manifesto</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
                <ul id="list3">
                    <li class="heading">Community</li>
                    <li>Refer a friend</li>
                    <li>Ideas</li>
                    <li>Scripts</li>
                    <li>House rules</li>
                    <li>Moderators</li>
                    <li>Pine Script™ Wizards</li>
                </ul>
                <ul id="list4">
                    <li class="heading">For Business</li>
                    <li>Widgets</li>
                    <li>Advertising</li>
                    <li>Charting libraries</li>
                    <li>Lightweight Charts™</li>
                    <li>Advanced Charts</li>
                    <li>Trading Platform</li>
                    <li>Brokerage integration</li>
                    <li>Partner program</li>
                </ul>
                </div>
            </footer>
            </div>
        );
    }
}

export default Foot;