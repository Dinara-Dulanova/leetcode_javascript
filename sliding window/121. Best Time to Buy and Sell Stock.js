//каждый раз запоминаем минимальную сумму которую видели
// смотрим дальше самую макимальную за которую мы можем прлодать

var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0
    }
    if (prices.length == 2 && prices[1] > prices[0]) {
        return prices[1] - prices[0]
    }

    let minPrice = prices[0];
    let maxSumm = 0;
    for (let i = 0; i <prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxSumm = Math.max(maxSumm, prices[i] - minPrice)
    }

    return  maxSumm;
}

console.log(maxProfit([7,6,4,3,1]))
//не оптимально по времени совсем
// var maxProfit = function(prices) {
//
//     if (prices.length < 2) {
//         return 0
//     }
//     if (prices.length == 2 && prices[1] > prices[0]) {
//         return prices[1] - prices[0]
//     }
//
//     let max = 0;
//     for (let rigth = 0; rigth < prices.length - 1; rigth++) {
//         let left = rigth + 1;
//         while (left < prices.length ) {
//             if ((prices[left] - prices[rigth]) > max) {
//                 max = prices[left] - prices[rigth]
//             }
//             left++
//         }
//     }
//
//     return max
// };
//
// console.log(maxProfit([7,6,4,3,1]))