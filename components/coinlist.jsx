import CoinInfo from "./coininfo"
import CoinTable from "./coinstats/cointable"
import Pagination from "./pagination"
import HighlightCoins from "./highlightcoins"

const Coinlist = () => {

  return (
    <div className='coinlist'>
        <CoinInfo />
        <CoinTable />         
        <Pagination />
        <HighlightCoins />
    </div>
  )
}

export default Coinlist