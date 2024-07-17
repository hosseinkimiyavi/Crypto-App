const BASEURL = "https://api.coingecko.com/api/v3"
const APIKEY = "CG-RW2eVT3JRT4Rr3J9Tu1g9b6L"

const GetcoinList = (page) =>{
    return `${BASEURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${APIKEY}`
}
export {GetcoinList};