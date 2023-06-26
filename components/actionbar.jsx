'use client'

import Accordion from 'react-bootstrap/Accordion';
import {BsChevronDown,BsMoonFill} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {RiShareForwardLine} from 'react-icons/ri'

const ActionBar = () => {
  return (
    <div className="action-bar">
        <div className="action-bar-wrapper">
            <div className="action-options">
                <div className="item currency">            
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> 
                                <span>USD</span>
                                <BsChevronDown size={16}/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <BiSearch size={18} className='searching' />
                                <input type="text" placeholder="Search currency"/>
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
                <div className="item hours">          
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> 
                                <span>24h</span>
                                <BsChevronDown size={16}/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion-content">
                                    <div className="search-blocks">
                                        <ul className="search-results">                                                  
                                            <li className='result-item'>
                                               1 hour
                                            </li>
                                            <li className='result-item'>
                                                3 hour
                                            </li>
                                            <li className='result-item'>
                                                12 hour
                                            </li>
                                            <li className='result-item'>
                                                24 hour
                                            </li>
                                            <li className='result-item'>
                                                7 days
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="item lang">        
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> 
                                <span>EN</span>
                                <BsChevronDown size={16}/>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion-content">
                                    <div className="search-blocks">
                                        <ul className="search-results">                                                  
                                            <li className='result-item'>
                                               English(EN)
                                            </li>
                                            <li className='result-item'>
                                                Español (España) (ES)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="item theme">
                    <BsMoonFill size={15} />
                </div>
                <div className="item share">
                    <RiShareForwardLine size={22} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActionBar