import Link from "next/link"

const Losers =  () => {
   
  return (
    <div className="highlight-coins-losers">
        <div className="highlight-info">
            <h2 className='title'>Top 5 losers</h2>
            <p className='description'>BOB, INT, BIRD, CLIPS and WOJAK had the biggest price loss over the last 24 hours.</p>
        </div>
        <div className="table-head">
            <div className="table-head-titles">
                <div className="title">
                    <Link href='/'>
                        <span>#</span>
                        Coins
                    </Link>
                </div>
                <div className="title">
                    <Link href='/'>
                        Price
                    </Link>
                </div>
                <div className="title">
                    <Link href='/'>
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
        <Link href='/' className='more'>
            All losers
        </Link>
    </div>
  )
}

export default Losers