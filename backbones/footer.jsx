'use client'
import Link from 'next/link'
import React from 'react'
import { Accordion } from 'react-bootstrap'
import {BsChevronDown, BsLinkedin, BsFillEnvelopeFill} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-partner-block">
            <section className='partner-list'>
                <div className="partner-list-title">
                    Partners & clients
                </div>
                <div className="partner-list-list">
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/5ee517bac20cbf4b3884b0e0caf1984f.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Binance
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/1c42c2b1256986907bfe008eab4db9d6.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Kucoin
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/36fdf7ba1eb98e05c6c9646e517dd16d.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Gate.io
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/c26aea0a710d1bcadf92b1342ca24365.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Bitvavo
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/e27eea3c9f696fb9589926712cfc53b4.svg"alt="binance" />
                        </span>
                        <span className="list-name">
                            Coinex
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/7eea82d7073c955fa5cb002d92b39d78.svg" alt="binance" width={26} height={26}/>
                        </span>
                        <span className="list-name">
                            OKX
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/1227e2e9ed3f1cd7010219c8d24b6237.svg" alt="binance" width={26} height={26}/>
                        </span>
                        <span className="list-name">
                            Coinovy
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/7bcd9cb6aee429c6cb0e21f139369bc6.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            DDKoin
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/53b8d82312b8b075dc6efe3deb2b1f51.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Coingaming
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/c879638e70f49d87fed723c8ca1c2839.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Neutrino Protocol
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/fd8ab90a8156de60aedc8664bc7f2439.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Waves
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/img/paradox-logo.afc4159.png" alt="binance" width={26} height={26} />
                        </span>
                        <span className="list-name">
                            Parodox
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/23c660c3564590da11f3019ea2b06216.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Odyssey
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/19df01f5d633aa90b9eb7deeae533026.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            eToro
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/7753ab4fcb0b81e940195069cad4e0a6.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Indacoin
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/img/bpsaa-logo.4cf0a47.png" alt="binance" height={26} width={26} />
                        </span>
                        <span className="list-name">
                            BPSAA
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/7fd1762754c7d632bb0bf7c78ff1331f.svg" alt="binance"  />
                        </span>
                        <span className="list-name">
                            Rarible
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/fa202c69acb3cb9f36e5df0250ab6601.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Chalink
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/3e03bbb9256e56683755d311c9f269dc.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Jaxx Liberty
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/288a7362975d40596cc49a680a39ca3d.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Currency.com
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/df65411904197562a4974b75c9d3f7e9.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Coinzilla
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/cbf87d154a5bcb8aee8b8356eb19c754.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Gravity Protocol
                        </span>
                    </Link>
                    <Link href={"https://google.com"} className='list-item'>
                        <span className="list-icon">
                            <img src="https://cdn.coinranking.com/assets/8f625649e301b383da848eca34d71efd.svg" alt="binance" />
                        </span>
                        <span className="list-name">
                            Ads Supplier
                        </span>
                    </Link>
                    
                </div>
            </section>
        </div>
        <div className="footer-blocks">
            <div className="footer-blocks-item">
                <span className='item-title'>Preferences</span>
                <div className="item-lists">
                    <div className="item-list">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> 
                                <span>USD</span>
                                <BsChevronDown size={19}/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <BiSearch size={18} className='searching' />
                                <input type="text" placeholder="Search currency"
                                autoComplete="on"/>
                                <div className="accordion-content">
                                    <div className="search-blocks">
                                        <ul className="search-results">                                                  
                                            <li className='result-item'>
                                                USD - US Dollar
                                            </li>
                                            <li className='result-item'>
                                                EUR - Euro
                                            </li>
                                            <li className='result-item'>
                                                MYR - Malaysian Ringgit
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                    <div className="item-list">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> 
                                <span>EN</span>
                                <BsChevronDown size={19}/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion-content">
                                    <div className="search-blocks">
                                        <ul className="search-results">                                                  
                                            <li className='result-item'>
                                                Bahasa Indonesia (ID)
                                            </li>
                                            <li className='result-item'>
                                                Deutsch (DE)
                                            </li>
                                            <li className='result-item'>
                                                English (EN)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
            </div>
            <div className="footer-blocks-item">
                <span className="item-title">Products</span>
                <div className="item-lists">
                    <ul className="item-list">
                        <li className='item'>
                            <Link href={"https://github"}>
                                Advertise
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Coinranking API
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Coinhodler
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Android app
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Windows app
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="footer-blocks-item">
                <span className="item-title">Resources</span>
                <div className="item-lists">
                    <ul className="item-list">
                        <li className='item'>
                            <Link href={"https://github"}>
                                List a cryptocurrency
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Edit a cryptocurrency
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                API documentation
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                API pricing
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Support & FAQ
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="footer-blocks-item">
                <span className="item-title">Info</span>
                <div className="item-lists">
                    <ul className="item-list">
                        <li className='item'>
                            <Link href={"https://github"}>
                                About us
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Methodology
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Changelog
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Branding
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Feedback
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Terms & conditions
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                Contact
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="footer-blocks-item">
                <span className="item-title">Social</span>
                <div className="item-lists">
                    <ul className="item-list">
                        <li className='item'>
                            <Link href={"https://github"}>
                                <AiOutlineTwitter size={23} />
                                Twitter
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                <FaTelegramPlane size={23} />
                                Telegram Group
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                <FaTelegramPlane size={23} />
                                Telegram Bot
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                <FaTelegramPlane size={23} />
                                Telegram News
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                <BsLinkedin size={23} />
                                LinkedIn
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                <AiOutlineGithub size={23} />
                                GitHub
                            </Link>
                        </li>
                        <li className='item'>
                            <Link href={"https://github"}>
                                <BsFillEnvelopeFill  size={23} scale={10} />
                                Newsletter
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer