'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import {BiSearch} from 'react-icons/bi'
import {FaSortAmountDown} from 'react-icons/fa'
import Info from '../public/svg/info.svg'


const CoinInfo = () => {

  return (
    <div className='stats'>
        <div className="stats-head">
            <h1 className='title'>Cryptocurrency price list</h1>
            <p className='description'>All cryptocurrencies ranked by market cap.</p>
        </div>
        <div className="stats-bar">
            <ul className='stats-bar-items'>
                <li  className='stat-bar-item'>
                    <div className="item-head">
                        <span>
                            Market cap     
                        </span>      
                        <Image src={Info} alt='info' />
                    </div>
                    <div className="item-value">
                        <abbr title="1,027,408,169,158">$ 1.03 trillion</abbr>
                        <span className='change'>-3.14%</span>
                    </div>
                </li>
                <li  className='stat-bar-item'>
                    <div className="item-head">
                        <span>
                            Gainers vs Losers   
                        </span>      
                        <Image src={Info} alt='info' />
                    </div>
                    <div className="item-value">
                        <div className="w-vs-l">
                            <span className="w-percentage">60%</span>
                            <div className="w-l-bar">
                                <div className="w-bar"></div>
                                <div className="l-bar"></div>
                            </div>
                            <span className="l-percentage">40%</span>
                        </div>
                    </div>
                </li>
                <li  className='stat-bar-item'>
                    <div className="item-head">
                        <span>
                            Trading volume    
                        </span>      
                        <Image src={Info} alt='info' />
                    </div>
                    <div className="item-value">
                        <abbr title="1,027,408,169,158">$ 32.64 billion</abbr>        
                    </div>
                </li>
                <li  className='stat-bar-item'>
                    <div className="item-head">
                        <span>
                            BTC dominance     
                        </span>      
                        <Image src={Info} alt='info' />
                    </div>
                    <div className="item-value">
                        <p>46.5%</p>
                    </div>
                </li>
                <li  className='stat-bar-item'>
                    <div className="item-head">
                        <span>
                            All coins     
                        </span>      
                        <Image src={Info} alt='info' />
                    </div>
                    <div className="item-value">
                        <p title="1,027,408,169,158">26,417</p>
                    </div>
                </li>              
            </ul>
        </div>
        <div className="stats-types">
            <div className="search-coin">     
                    <input id="toggle" type="checkbox" />
                    <label htmlFor="toggle"><BiSearch size={21}/></label>
                    <div className="state">
                        <input type="text" placeholder='Search a coin'  autoFocus />
                    </div>
                    <div className="closesearch">                      
                        <label htmlFor="toggle" className='closed' />
                    </div>
            </div>
            <div className="rank-list">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><FaSortAmountDown size={17} /> </Accordion.Header>
                        <Accordion.Body>
                            <div className="info">
                                Choose ranking
                            </div>
                            <ul className='items'>
                                <li className='item'>
                                    Market cap
                                </li>
                                <li className='item'>
                                    Trading volume
                                </li>
                                <li className='item'>
                                    Highest price
                                </li>
                                <li className='item'>
                                    Lowest price
                                </li>
                                <li className='item'>
                                    Best performing
                                </li>
                                <li className='item'>
                                    wost performing
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="options">
                <ul className='options-items'>
                    <li className='option-item'>
                        <Link href='/'>
                            All
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Favorites
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            New
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Gainers
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Losers
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            BRC-20
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            SRC-20
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            ORC-20
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Meme
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Layer-1
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            AI
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Exchange
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Layer-2
                        </Link>
                    </li>
                    <li className='option-item'>
                        <Link href='/'>
                            Web3
                        </Link>
                    </li>
                    <li className='option-item '>
                        <div className='more'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>+17 more</Accordion.Header>
                                    <Accordion.Body>
                                    <div className="info">
                                        Choose ranking
                                    </div>
                                    <ul className='items'>
                                        <li className='item'>
                                            Market cap
                                        </li>
                                        <li className='item'>
                                            Trading volume
                                        </li>
                                        <li className='item'>
                                            Highest price
                                        </li>
                                        <li className='item'>
                                            Lowest price
                                        </li>
                                        <li className='item'>
                                            Best performing
                                        </li>
                                        <li className='item'>
                                            wost performing
                                        </li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </li>
                </ul>
            </div>       
        </div>
    </div>
  )
}

export default CoinInfo
