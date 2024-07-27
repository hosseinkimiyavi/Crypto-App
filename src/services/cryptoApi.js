const BASEURL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-RW2eVT3JRT4Rr3J9Tu1g9b6L"

const GetcoinList = (page,currency) =>{
    return `${BASEURL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`
}
const searchCoin=(query)=>{
  return `${BASEURL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`
}
export {GetcoinList,searchCoin};