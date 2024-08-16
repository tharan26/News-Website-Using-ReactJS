import React, { Component } from "react";
import './News.css';

class News extends Component{
    render(){
        return(
            <div class="news">
            <section>
                    <h3>News</h3>
                <div class="newslist">
                <ul id="newslist1">
                    <li>Bitcoin Surges Past $50,000: What’s Fueling the Crypto Rally?</li>
                    <li>Market Volatility: Top Strategies for Navigating Uncertain Times</li>
                    <li>Tech Stocks Rebound: What Investors Need to Know</li>
                    <li>Crypto Regulation: How New Laws Could Impact Your Investments</li>
                    <li>Gold vs. Bitcoin: Which Is the Better Hedge Against Inflation?</li>
                </ul>
                <ul id="newslist2">
                    <li>The Future of Finance: How Blockchain is Reshaping the Industry</li>
                    <li>Stock Market Today: Key Indicators and What They Mean for Traders</li>
                    <li>Ethereum 2.0: What the Upgrade Means for Investors</li>
                    <li>Top 5 Cryptocurrencies to Watch This Year</li>
                    <li>Central Banks and Digital Currencies: A New Era of Money?</li>
                </ul>
                <ul id="newslist3">
                    <li>Wall Street's Biggest Movers: Stocks to Watch This Week</li>
                    <li>DeFi Revolution: How Decentralized Finance is Changing Investing</li>
                    <li>Stock Market Correction: Should You Buy the Dip?</li>
                    <li>Altcoins on the Rise: Which Ones Are Worth Your Attention?</li>
                    <li>Inflation Fears: How to Protect Your Portfolio</li>
                </ul>
                <ul id="newslist4">
                    <li>Cryptocurrency Mining: Is It Still Profitable in 2024?</li>
                    <li>AI in Trading: How Artificial Intelligence is Shaping the Markets</li>
                    <li>Real Estate vs. Stocks: Where Should You Invest in 2024?</li>
                    <li>Crypto Scams on the Rise: How to Stay Safe in the Digital Age</li>
                    <li>Green Investments: How ESG Criteria Are Influencing Markets</li>
                </ul>
                </div>
            </section>
            </div>
        );
    }
}

export default News;