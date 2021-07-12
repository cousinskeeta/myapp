const requests = {
    fetchCoinList: `/coins/list`,
    fetchSimplePrice: `/simple/price?ids=bitcoin&vs_currencies=usd`,
    fetchOHLC: `/coins/bitcoin/ohlc?vs_currency=usd&days=30`,
}

export default requests;
