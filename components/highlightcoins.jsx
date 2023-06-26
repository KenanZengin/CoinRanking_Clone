'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import {FaChevronDown} from 'react-icons/fa'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Logo from '../public/img/logo2.png'
import Winners from './coinstats/winners'
import Losers from './coinstats/losers'
import Renews from './coinstats/renews'


const HighlightCoins =  () => {

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

                   <Winners />
                   <Losers />
                   <Renews />
                   
                </div>
            </aside>
        </section>
        <section className='advert-api-promotion'>
            <div className='advertisings-space'>
                <div className="advertisings">
                    <Link href='/'>
                        Advertise here
                    </Link>
                    <div className="advertisings-holder">
                    </div>
                </div>
            </div>
            <div className='api-promotion'>
                <div className='api-promotion-block'>
                    <div className='api-promotion-block-left'>
                       <Link href='/'>
                            <Image src={Logo} alt='logo' width={35} height={35} />
                            Coinranking API
                       </Link>
                    </div>
                    <div className='api-promotion-block-right'>
                        <p className='info'>Show cryptocurrency data on your website or app</p>
                        <div className='bttns'>
                            <Link href='/' className='apidoc'>
                                View API docs
                                <MdOutlineKeyboardArrowRight size={27}/>
                            </Link>
                            <Link href='/' className='apikey'>
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