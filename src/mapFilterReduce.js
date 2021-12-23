let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]

cart.map(product=>{
    console.log(product.productName + " : "+ product.unitPrice*product.quantity)
}) //cart dolaş ve her bir product için

let total = cart.reduce((acc,product)=> acc+product.unitPrice,0) // acc=başlangıç değeri onu da en sonda 0 olarak veriyoruz
//sonra buna unitprice'ları ekliyoruz ve toplam fiyatı buluyoruz
console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2) // cart filtrele quantity 2 den büyük olanları yeni bir array'e at
console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)