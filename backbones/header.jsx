'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navbar, Nav,  Accordion } from 'react-bootstrap'
import {BiHeart,BiSearch} from 'react-icons/bi'
import {HiBars4} from 'react-icons/hi2'
import {FaChevronDown} from 'react-icons/fa'

import logo from '../public/img/logo.jpg'

const Header = () => {
  return (
    <div className='header'>  
        <div className="top-leaderboard">
            <div className="top-leaderboard-holder"></div>
        </div>
        <div className="header-web">
            <div className="header-web-left">
                <Image src={logo} width={28} height={28} alt='cryptoLogo'   />
                Coinranking
            </div>
            <div className="header-web-right">
                <div className="headnav">
                    <Navbar>
                        <Nav>
                            <Nav.Item className='link-nav'>
                                <Link href='https://github.com/'>
                                    Cryptocurrencies
                                </Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item className='link-nav'>
                                <Link href='https://github.com/'>
                                    Exchanges
                                </Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item className='accor-nav'>
                                <BiHeart size={27} />
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item className='accor-nav search'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><BiSearch size={27} /></Accordion.Header>
                                        <Accordion.Body>
                                            <BiSearch size={18} className='searching' />
                                            <input type="text" placeholder="Search coins, exchanges or markets"
                                            autoomplete="on"/>

                                            <div className="accordion-content">
                                                <div className="search-blocks">
                                                    <div className="search-title">
                                                        <span>RECENT COINS</span>
                                                        <Link href='https://github.com/'>
                                                            Show all
                                                        </Link>
                                                    </div>
                                                    <ul className="search-results">                                                  
                                                        <li className='result-item'>
                                                            <Link href={"https://github"}>
                                                                <div className="search-logo-name">
                                                                    <img src="https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=23x23"
                                                                        width={22} height={22} />
                                                                    <div className="search-info">
                                                                        <span className='search-name'>USDC</span>
                                                                        <span className='search-symbol'>USDC</span>  
                                                                    </div> 
                                                                </div>
                                                                <div className="search-price">
                                                                    <span>$0.9992</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="search-blocks">
                                                    <div className="search-title">
                                                        <span>RECENT EXCHANGES</span>
                                                        <Link href='https://github.com/'>
                                                            Show all
                                                        </Link>
                                                    </div>
                                                    <ul className="search-results">                                                  
                                                        <li className='result-item'>
                                                            <Link href={"https://github"}>
                                                                <div className="search-logo-name">
                                                                    <img src="https://cdn.coinranking.com/xcZdYtX6E/okx.png?size=23x23"
                                                                        width={22} height={22} />
                                                                    <div className="search-info">
                                                                        <span className='search-name'>OKX</span>
                                                                        {/* <span className='search-symbol'>USDC</span>   */}
                                                                    </div> 
                                                                </div>
                                                                <div className="search-price">
                                                                    <span>
                                                                        <svg width="13" height="14" viewBox="0 0 13 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" >
                                                                            <g>
                                                                                <path d="M6.5,0.5C3.929,2.667 0.5,3.1 0.5,3.1C0.5,4.833 0.929,10.033 6.5,13.5C12.071,10.033 12.5,4.833 12.5,3.1C12.5,3.1 9.071,2.667 6.5,0.5Z" fill="none" stroke="#00a930" strokeWidth="1px"></path>
                                                                                <path d="M4.699,6.907L6.258,8.376L8.77,4.974" fill="none" stroke="#00a930" strokeWidth="1px"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="search-blocks">
                                                    <div className="search-title">
                                                        <span>MARKETS</span>
                                                        <Link href='https://github.com/'>
                                                            Show all
                                                        </Link>
                                                    </div>
                                                    <ul className="search-results">                                                  
                                                        <li className='result-item'>
                                                            <Link href={"https://github"}>
                                                                <div className="search-logo-name">
                                                                    <img src="https://cdn.coinranking.com/54BZJWiXf/pancakeswap.png?size=23x23"
                                                                        width={22} height={22} />
                                                                    <div className="search-info">
                                                                        <span className='search-name'>USDT/FERC</span>
                                                                        <span className='search-symbol'>PancakeSwap v2</span>  
                                                                    </div> 
                                                                </div>
                                                                <div className="search-price">
                                                                    <span>
                                                                        <svg width="13" height="14" viewBox="0 0 13 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" >
                                                                            <g>
                                                                                <path d="M6.5,0.5C3.929,2.667 0.5,3.1 0.5,3.1C0.5,4.833 0.929,10.033 6.5,13.5C12.071,10.033 12.5,4.833 12.5,3.1C12.5,3.1 9.071,2.667 6.5,0.5Z" fill="none" stroke="#00a930" strokeWidth="1px"></path>
                                                                                <path d="M4.699,6.907L6.258,8.376L8.77,4.974" fill="none" stroke="#00a930" strokeWidth="1px"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className='result-item'>
                                                            <Link href={"https://github"}>
                                                                <div className="search-logo-name">
                                                                    <img src="https://cdn.coinranking.com/54BZJWiXf/pancakeswap.png?size=23x23"
                                                                        width={22} height={22} />
                                                                    <div className="search-info">
                                                                        <span className='search-name'>USDT/VMPX</span>
                                                                        <span className='search-symbol'>PancakeSwap v2</span>  
                                                                    </div> 
                                                                </div>
                                                                <div className="search-price">
                                                                    <span>
                                                                        <svg width="13" height="14" viewBox="0 0 13 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" className="">
                                                                            <g>
                                                                                <path d="M6.5,0.5C3.929,2.667 0.5,3.1 0.5,3.1C0.5,4.833 0.929,10.033 6.5,13.5C12.071,10.033 12.5,4.833 12.5,3.1C12.5,3.1 9.071,2.667 6.5,0.5Z" fill="none" stroke="#00a930" strokeWidth="1px"></path>
                                                                                <path d="M4.699,6.907L6.258,8.376L8.77,4.974" fill="none" stroke="#00a930" strokeWidth="1px"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Nav.Item>
                        </Nav>
                        <Nav >
                            <Nav.Item className='accor-nav bar'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><HiBars4 size={27} /></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accordion-content">
                                                <ul className="section-results">
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>Cryptocurrencies</span>
                                                                    <FaChevronDown size={16}/>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>Exchanges</span>
                                                                    <FaChevronDown size={16}/>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>Products</span>
                                                                    <FaChevronDown size={16}/>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>Learn</span>
                                                                    <FaChevronDown size={16}/>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>API</span>
                                                                    
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>Support</span>
                                                                    <FaChevronDown size={16}/>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>Company</span>
                                                                    <FaChevronDown size={16}/>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='results-item'>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>
                                                                    <span>Social</span>
                                                                    <FaChevronDown size={16}/>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='types-of-coins'>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                All coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                New coins
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Top crypto gainers
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                Biggest crypto losers   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                BRC-20 tokens
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                SRC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                        <li className='type-of-coin'>
                                                                            <Link href="https://google.com">
                                                                                ORC-20 tokens   
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header




