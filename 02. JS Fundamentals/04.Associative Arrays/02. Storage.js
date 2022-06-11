function solve(input) {
  let products = new Map();

  for (let string of input) {
    let parts = string.split(" ");
    let product = parts[0];
    let quantity = +parts[1];

    if (products.has(product)) {
        quantity += products.get(product)
    } 
    products.set(product, quantity)
  }
  for(let productQuantity of products.entries()){
      let product = productQuantity[0]
      let quantity = productQuantity[1]
console.log(`${product} -> ${quantity}`)
  }

}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
