import Link from 'next/link'

async function getData(){


  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en') 
  const data = await res.json()
 

  return  data
}

const CoinTable = async () => {
  
  const coins = await getData()

  if(!coins || !coins.length){
    return <div>coinecko.com stopped api support, try again in 1 minute</div>
  }
  return (
    <section className='table'>
      <div className="table-head">
        <div className="table-head-titles">
          <div className="title">
            <Link href={"https://google.com"}>
              All coins
            </Link>
          </div>
          <div className="title">
            <Link href={"https://google.com"}>
              Price
            </Link>  
          </div>
          <div className="title">
            <Link href={"https://google.com"}>
              Market Cap
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
        {coins.map((crypto, index) =>(
          <div className="table-body-content" key={index}>
          <div className="coin-content">
            <div className="profile">
              <div className="favorite-button">
                <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={12} height={11} alt="" />
                {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
              </div>
              <span className='rank'>{crypto.market_cap_rank}</span>
              <img src={crypto.image} width={26}
              height={26} />
              <span className='names'>
                <span className="name">{crypto.name}</span>
                <span className='symbol'>{crypto.symbol.toUpperCase()}</span>
              </span>

            </div>
            <div className="price">
              $ {crypto.current_price > 10 
                  ? Number(crypto.current_price).toLocaleString('en-US',{maximumFractionDigits:2})
                  : crypto.current_price > 1
                    ? Number(crypto.current_price).toLocaleString('en-US',{maximumFractionDigits:3})
                    : crypto.current_price > 0.1
                      ? Number(crypto.current_price).toLocaleString('en-US',{maximumFractionDigits:4})
                      : crypto.current_price > 0.01
                        ? Number(crypto.current_price).toLocaleString('en-US',{maximumFractionDigits:5})
                        : crypto.current_price > 0.001 
                          ? Number(crypto.current_price).toLocaleString('en-US',{maximumFractionDigits:6})
                          : crypto.current_price > 0.0000001 
                            ? Number(crypto.current_price).toLocaleString('en-US',{maximumFractionDigits:9})
                            : Number(crypto.current_price).toLocaleString('en-US',{maximumFractionDigits:13})
                              
                }
              <div className="secret-marketcap">
              $ {Number(crypto.market_cap).toLocaleString('en-US',{maximumFractionDigits:5})} 
            </div>
            </div>
            <div className="marketcap">
              $ {Number(crypto.market_cap).toLocaleString('en-US',{maximumFractionDigits:5})} 
              {/* $ {Number(String(coin.marketCap).substring(0,3)).toFixed('2')} billion */}
            </div>
            <div className="hours">
              {crypto.price_change_percentage_24h > 0 
                  ?<span className='plus'>
                    +{crypto.price_change_percentage_24h.toFixed(2)}%
                  </span> 
                  :<span className='minus'>
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                </span>
              }
            </div>
          </div>
        </div>
          ))}
      </div>
    </section>
  )
}

export default CoinTable