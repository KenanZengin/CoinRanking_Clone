'use client'


import Link from 'next/link'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import {FaChevronDown} from 'react-icons/fa'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

import logo from '../public/img/logo2.png'




const HighlightCoins = async () => {
  return (
   <>
        <section className="content-section">
        <main className="content-section-article">
            <div className="description">
                <h2 className='title'>What’s Coinranking about?</h2>
                
                <p>Coinranking was established in 2017 in the Netherlands by three co-founders, Mark, Maarten and Nick who were enthusiastic about the cryptocurrency market that was booming at the time.</p>

                <p>We saw that everyday people don’t have enough time and skills to compete with professional crypto investors. So, we wanted to make it easier for them to spot investment opportunities in this market.</p>
                
                <p>That’s why, when we started, we built the first cryptocurrency price tracker optimized for mobile phones. Today, we make spotting opportunities easy by signaling about market events and by ranking cryptocurrencies in many ways.</p>

                <p>In practice, we provide price data of all cryptocurrencies. Here, you can check for real-time prices, market caps and historical price data. Also, we put cryptocurrencies into many different categories. In this way, you can track which category is performing well and in which one you could invest your money.</p>

                <p>Essentially, Coinranking makes it easier for you to spot investment opportunities in the cryptocurrency market.</p>

            </div>
            <div className="page-faq">
                <h3 className="title">
                    Populer questions
                </h3>

                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>How do we rank cryptocurrencies?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                We rank cryptocurrencies based on the market cap by default. However, we do offer filters according to other metrics such as trading volume or price. Besides market cap, we also implement certain criteria that decide which 'tier' a cryptocurrency would be placed at. To understand more about our ‘tier’ system, check out our page for more information.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>How do we calculate coin prices?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>How to view crypto prices in my local currency?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What is the best cryptocurrency to invest in?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>Why is our price different from an exchange?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What data sources do we use?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What is Bitcoin dominance?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What do the mini price charts on the right mean?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What is Bitcoin dominance?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What’s the difference between a cryptocurrency, coin and token?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What are the different types of cryptocurrencies?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>What is an altcoin?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>Does Coinranking list all cryptocurrencies?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>How can I list my coin on Coinranking?</span>
                            <FaChevronDown size={16}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, velit?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                
            </div>
        </main>
        <aside className="content-section-aside">
            <div className='highlight-coins'>
                    <div className="highlight-coins-winners">
                        <div className="highlight-info">
                            <h2 className='title'>Top 5 gainers  </h2>
                            <p className='description'>DIC, HAO, GRV, XOR and NIM had the biggest price gain over the last 24 hours.</p>
                        </div>
                        <div className="table-head">
                            <div className="table-head-titles">
                                <div className="title">
                                    <Link href={"https://github.com/"}>
                                        <span>#</span>
                                        Coins
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link href={"https://google.com"}>
                                        Price
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link href={"https://google.com"}>
                                        24h
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="table-body">
                            <div className="table-body-content">
                                <div className="coin-content">
                                    <div className="profile">
                                    <div className="favorite-button">
                                        <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={10} height={9} alt="btn" />
                                        {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
                                    </div>
                                    <span className='rank'>1</span>
                                    <img src="https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=23x23" width={26}
                                    height={26} alt='rank'/>
                                    <span className='names'>
                                        <span className="name">Usdc</span>
                                        <span className='symbol'>USD</span>
                                    </span>
                                    </div>
                                    <div className="price">
                                    $ 0.008505
                                    </div>
                                    <div className="hours">
                                    +243%
                                    </div>
                                </div>
                            </div>
                            <div className="table-body-content">
                                <div className="coin-content">
                                    <div className="profile">
                                    <div className="favorite-button">
                                        <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={10} height={9} alt="btn" />
                                        {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
                                    </div>
                                    <span className='rank'>1</span>
                                    <img src="https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=23x23" width={26}
                                    height={26} alt='rank' />
                                    <span className='names'>
                                        <span className="name">Usdc</span>
                                        <span className='symbol'>USD</span>
                                    </span>

                                    </div>
                                    <div className="price">
                                    $ 0.008505
                                    </div>
                                    <div className="hours">
                                    +243%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={"https://github.com"} className='more'>
                            All gainers
                        </Link>
                    </div>
                    <div className="highlight-coins-losers">
                        <div className="highlight-info">
                            <h2 className='title'>Top 5 losers</h2>
                            <p className='description'>BOB, INT, BIRD, CLIPS and WOJAK had the biggest price loss over the last 24 hours.</p>
                        </div>
                        <div className="table-head">
                            <div className="table-head-titles">
                                <div className="title">
                                    <Link href={"https://github.com/"}>
                                        <span>#</span>
                                        Coins
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link href={"https://google.com"}>
                                        Price
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link href={"https://google.com"}>
                                        24h
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="table-body">
                            <div className="table-body-content">
                                <div className="coin-content">
                                    <div className="profile">
                                    <div className="favorite-button">
                                        <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={10} height={9} alt="heart" />
                                        {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
                                    </div>
                                    <span className='rank'>1</span>
                                    <img src="https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=23x23" width={26}
                                    height={26} alt='rank'/>
                                    <span className='names'>
                                        <span className="name">Usdc</span>
                                        <span className='symbol'>USD</span>
                                    </span>
            
                                    </div>
                                    <div className="price">
                                    $ 0.008505
                                    </div>
                                    <div className="hours">
                                    +243%
                                    </div>
                                </div>
                            </div>
                            <div className="table-body-content">
                                <div className="coin-content">
                                    <div className="profile">
                                    <div className="favorite-button">
                                        <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={10} height={9} alt='rank' />
                                        {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
                                    </div>
                                    <span className='rank'>1</span>
                                    <img src="https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=23x23" width={26}
                                    height={26} alt='rank'/>
                                    <span className='names'>
                                        <span className="name">Usdc</span>
                                        <span className='symbol'>USD</span>
                                    </span>
            
                                    </div>
                                    <div className="price">
                                    $ 0.008505
                                    </div>
                                    <div className="hours">
                                    +243%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={"https://github.com"} className='more'>
                            All losers
                        </Link>
                    </div>
                    <div className="highlight-coins-renews">
                    <div className="highlight-info">
                            <h2 className='title'>Newest coins</h2>
                            <p className='description'>DZD, NGMI, FADER, KENTO and DE are the newest coins that were added to Coinranking.</p>
                        </div>
                        <div className="table-head">
                            <div className="table-head-titles">
                                <div className="title">
                                    <Link href={"https://github.com/"}>
                                        <span>#</span>
                                        Coins
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link href={"https://google.com"}>
                                        Price
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link href={"https://google.com"}>
                                        24h
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="table-body">
                            <div className="table-body-content">
                                <div className="coin-content">
                                    <div className="profile">
                                    <div className="favorite-button">
                                        <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={10} height={9} alt='rank' />
                                        {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
                                    </div>
                                    <span className='rank'>1</span>
                                    <img src="https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=23x23" width={26}
                                    height={26} alt='rank'/>
                                    <span className='names'>
                                        <span className="name">Usdc</span>
                                        <span className='symbol'>USD</span>
                                    </span>
            
                                    </div>
                                    <div className="price">
                                    $ 0.008505
                                    </div>
                                    <div className="hours">
                                    +243%
                                    </div>
                                </div>
                            </div>
                            <div className="table-body-content">
                                <div className="coin-content">
                                    <div className="profile">
                                    <div className="favorite-button">
                                        <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={10} height={9} alt='rank' />
                                        {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
                                    </div>
                                    <span className='rank'>1</span>
                                    <img src="https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=23x23" width={26}
                                    height={26} alt='rank'/>
                                    <span className='names'>
                                        <span className="name">Usdc</span>
                                        <span className='symbol'>USD</span>
                                    </span>
            
                                    </div>
                                    <div className="price">
                                    $ 0.008505
                                    </div>
                                    <div className="hours">
                                    +243%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={"https://github.com"} className='more'>
                            Newest coins
                        </Link>
                    </div>
            </div>
        </aside>
        </section>
        <section className="advert-api-promotion">
            <div className="advertisings-space">
                <div className="advertisings">
                    <Link href="https://github.com/">
                        Advertise here
                    </Link>
                    <div className="advertisings-holder">

                    </div>
                </div>
            </div>
            <div className="api-promotion">
                <div className="api-promotion-block">
                    <div className="api-promotion-block-left">
                       <Link href="https://github.com/">
                            <Image src={logo} alt='logo' width={35} height={35} />
                            Coinranking API
                       </Link>
                    </div>
                    <div className="api-promotion-block-right">
                        <p className='info'>Show cryptocurrency data on your website or app</p>
                        <div className="bttns">
                            <Link href="https://github.com/" className='apidoc'>
                                View API docs
                                <MdOutlineKeyboardArrowRight size={27}/>
                            </Link>
                            <Link href="https://github.com/" className='apikey'>
                                Generate API key
                                <MdOutlineKeyboardArrowRight size={27}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default HighlightCoins