function discount(prices, discountRate) {
    for (let i = 0; i < prices.length; i++) {
      prices[i] *= 1 - discountRate;
    }
    return prices;
  }
  
  let prices = [8, 9, 4, 6.5, 3, 100];
  let discountRate = 0.3;
  let newPrice = discount(prices, discountRate);
  console.log(newPrice);