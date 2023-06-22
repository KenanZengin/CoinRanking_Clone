
import Link from 'next/link'



import {MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Pagination = () => {
  return (
    <section className="paginationn">
        <div className="paginationn-button-back">
            <MdOutlineKeyboardArrowLeft size={30} />
        </div>
        <div className="paginationn-list">
            <Link href={"https://github.com/"} className='first-page'>
                1
            </Link>
            <Link href={"https://github.com/"}>
                2
            </Link>
            <Link href={"https://github.com/"}>
                3
            </Link>
            <Link href={"https://github.com/"}>
                4
            </Link>
            <Link href={"https://github.com/"}>
                5
            </Link>
            <div className="paginationn-separator"></div>
            <Link href={"https://github.com/"}>
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

