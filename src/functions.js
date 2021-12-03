function addToCart(quantity,productName="Armut") {
    console.log("Sepete eklendi : " + productName + "adet :" + quantity)
}

addToCart()
addToCart(10)
addToCart("Elma")
addToCart("Yumurta")

let sayHello = ()=>  {    //sen bir fonksiyonsun dedik
    console.log("Hello World")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World2")
}

sayHello2()

let product1 = {productName:"Elma", unitPrice:10 , quantity:5}

function addToCart2(product) {
    console.log("Ürün : " +product.productName)
    console.log("Adet : " +product.quantity)
    console.log("Fiyat : " +product.unitPrice)
}

addToCart2(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName) //Ekrana karpuz dedi


function addToCart3(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart3(products)


function add(...numbers) { //rest operatörü ayırma yapar. En sona yazılır
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20,30)


let numbers = [20,30,500,600,12]
console.log(...numbers) // dizideki elemanları ayırdı
console.log(Math.max(...numbers)) //en büyüğünü göster



let [Marmara,Ege,Karadeniz,[marmaraSehirleri,egeSehirleri,karadenizSehirleri]] = [ //içerideki her şeyi ayrı ayrı distract ettik
    {name:"Marmara", population:"20m"},
    {name:"Ege", population:"10m"}, 
    {name:"Karadeniz", population:"15m"},
    [
        ["İstanbul","Kocaeli"],
        ["İzmir","Muğla"],
        ["Samsun","Trabzon"]
    ]
]

console.log(Marmara)
console.log(marmaraSehirleri)



let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Armut", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newQuantity)
