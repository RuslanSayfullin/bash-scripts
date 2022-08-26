let order = {"productName":"Велосипед","costomerName":"Саша","salesName":"Петя","totalPrice":15000};

let descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice');
console.log(descriptor);