import Link from 'next/link'


async function getData(){


  try{

    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=f133ccfd-fa6e-48c3-8816-181fc0d2bad6`)
    
    if(!res.ok){
      throw new Error(`Error status: ${res.status}`)
    }

    const data =await res.json()
  
    return  data

  }catch(err){
    console.log(`Error : ${err}`)
  } 
}


const CoinTable = async () => {
  
  const coins = await getData()
 
  
  return (
    <section className='table'>
      <div className='table-head'>
        <div className='table-head-titles'>
          <div className='title'>
            <Link href='/'>
              All coins
            </Link>
          </div>
          <div className='title'>
            <Link href='/'>
              Price
            </Link>  
          </div>
          <div className='title'>
            <Link href='/'>
              Market Cap
            </Link>  
          </div>
          <div className='title'>
            <Link href='/'>
              24h
            </Link>
          </div>
        </div>
      </div>
      <div className='table-body'>
        {coins.data.map((crypto, index) =>(
          <div className='table-body-content' key={index}>
          <div className='coin-content'>
            <div className='profile'>
              <div className="favorite-button">
                <img src="https://cdn.coinranking.com/assets/06bd7d42f160408d1c9447a0c2ea1df1.svg" width={12} height={11} alt="heart" />
                {/* <img src="https://cdn.coinranking.com/assets/f91b3897d99e00d6570ffced240e23b0.svg" width={12} height={11} alt="" /> */}
              </div>
              <span className='rank'>{crypto.cmc_rank}</span>
              <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${crypto.id}.png`} width={26}
              height={26} alt='cryptoImg'/>
              <span className='names'>
                <span className="name">{crypto.name}</span>
                <span className='symbol'>{crypto.symbol.toUpperCase()}</span>
              </span>

            </div>
            <div className='price'>
              $ {crypto.quote.USD.price > 10 
                  ? Number(crypto.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:2})
                  : crypto.quote.USD.price > 1
                    ? Number(crypto.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:3})
                    : crypto.quote.USD.price > 0.1
                      ? Number(crypto.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:4})
                      : crypto.quote.USD.price > 0.01
                        ? Number(crypto.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:5})
                        : crypto.quote.USD.price > 0.001 
                          ? Number(crypto.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:6})
                          : crypto.quote.USD.price > 0.0000001 
                            ? Number(crypto.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:9})
                            : Number(crypto.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:13})
                              
                }
              <div className='secret-marketcap'>
              $ {Number(crypto.quote.USD.market_cap).toLocaleString('en-US',{maximumFractionDigits:5})} 
            </div>
            </div>
            <div className='marketcap'>
              $ {Number(crypto.quote.USD.market_cap).toLocaleString('en-US',{maximumFractionDigits:5})} 
              {/* $ {Number(String(coin.marketCap).substring(0,3)).toFixed('2')} billion */}
            </div>
            <div className='hours'>
                {Number(crypto.quote.USD.percent_change_24h) <= 0 
                  ?<span className='minus'>
                    {crypto.quote.USD.percent_change_24h.toFixed(2)}% 
                  </span> 
                  :<span className='plus'>
                     +{crypto.quote.USD.percent_change_24h.toFixed(2)}%
                  </span> }
            </div>
          </div>
        </div>
          ))}
      </div>
    </section>
  )
}

export default CoinTable