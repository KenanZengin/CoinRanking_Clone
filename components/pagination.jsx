import Link from 'next/link'
import {MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Pagination = () => {
    
  return (
    <section className="paginationn">
        <div className="paginationn-button-back">
            <MdOutlineKeyboardArrowLeft size={30} />
        </div>
        <div className="paginationn-list">
            <Link href='/' className='first-page'>
                1
            </Link>
            <Link href='/'>
                2
            </Link>
            <Link href='/'>
                3
            </Link>
            <Link href='/'>
                4
            </Link>
            <Link href='/'>
                5
            </Link>
            <div className="paginationn-separator"></div>
            <Link href='/'>
                531
            </Link>
        </div>
        <div className="paginationn-button-next">
            <MdOutlineKeyboardArrowRight size={30} />
        </div>
    </section>
  )
}

export default Pagination   

