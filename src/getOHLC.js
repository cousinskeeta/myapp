function getOHLC (id) {
        const requests = {
        fetchSimplePrice: `/simple/price?ids=`+id+`&vs_currencies=usd`,
        fetchOHLC: `/coins/`+id+`/ohlc?vs_currency=usd&days=30`,
      }
      console.log(requests)
    return requests
};
getOHLC();
export default getOHLC;