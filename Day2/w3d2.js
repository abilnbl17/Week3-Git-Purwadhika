// Exercise

// Inisialisasi data restoran dan cart
const restoran = {name: "Kwetiaw 95", jarak: 5};
const ongkirPerKm = 2000;
const cart = [];

// Fungsi untuk menghitung total biaya
function hitungTotalBiaya() {
    let totalBiayaMakanan = 0;

    for (let i = 0; i < cart.length; i++){
        totalBiayaMakanan += cart[i].price * cart[i].qty;
    }
    const totalOngkir = restoran.jarak * ongkirPerKm;
    return totalBiayaMakanan + totalOngkir;
}

// Fungsi untuk menambahkan makanan ke cart
function addFood(food) {
    const existingItem = cart.find(item => item.name === food.name);

    if (existingItem){
        existingItem.qty += food.qty;
    } else {
        cart.push(food);
    }
}

// Fungsi untuk menghapus makanan dari cart
function hapusMakanan(foodName) {
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === foodName) {
            cart.splice(i, 1);
            break; // keluar dar perulangan setelah menghapus
        }
    }
}

// Fungsi untuk mengedit qty makanan tertentu didalam cart
function editQtyMakanan(foodName, newQty) {
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === foodName){
            cart[i].qty = newQty;
            break; // Keluar dari perulangan setelah mengedit
        }
    }
}

const capcay = { name: "Capcay", price: 50000, qty: 2 };
addFood(capcay);
console.log ("Total biaya setelah menambahkan capcay: ", hitungTotalBiaya());

const nasiGoreng = { name: "Nasi Goreng", price: 35000, qty: 3};
addFood(nasiGoreng);
console.log ("Total biaya setelah menambahkan Nasi Goreng: ", hitungTotalBiaya());

hapusMakanan("capcay");
console.log ("Total biaya setelah menghapus Capcay: ", hitungTotalBiaya());

editQtyMakanan("nasi goreng", 5);
console.log ("Total biaya setelah mengedit qty Nasi Goreng: ", hitungTotalBiaya());


// beberapa relasi dari Catetan, chat GPT, stackover flow dan lainnya 
console.log ("-----------------------------------------");
console.log ("-----------------------------------------");

function printTriangle1(tinggi){
    for (let i = 1; i <= tinggi; i++) {
        let row = "*".repeat(i);
        console.log (row);
        // console.log ()
    }
}
printTriangle1(4);
console.log (" ");


function printTriangle2(tinggi){
    for (let i = tinggi; i >= 1; i--){
        let row = " ".repeat(tinggi - i) + "*".repeat(i);
        console.log (row);
    }
}
printTriangle2(4);
console.log (" ");


function printTriangle3(tinggi){
    for (let i = 1; i <= tinggi; i++){
        let row = " ".repeat(tinggi - i) + "*".repeat(i);
        console.log (row);
    }
}
printTriangle3(4);
console.log (" ");

function printTriangle4(tinggi){
    for (let i = tinggi; i >= 1; i--){
        let row = "*".repeat(i);
        console.log (row);
    }
}
printTriangle4(4);
console.log (" ");

function printTriangle5(tinggi){
    for (let i = 1; i <= tinggi; i++){
        let row = " ".repeat(tinggi - i);
        for (let j = 1; j <= i; j++){
            if (j < i){
                row += "* ";
            } else {
                row += "*";
            }
        }
        console.log (row);
    }
}
printTriangle5(4);
console.log (" ");
// beberapa relasi dari Catetan, chat GPT, stackover flow dan lainnya 

// const tinggi = 4
// console.log (segitigaBintangTerbalik(tinggi));
// console.log (segitigaBintangBerkebalikanTerbalik(tinggi));
// console.log (segitigaBintangSikuKiriTerbalik(tinggi));
// console.log (segitigaBintangSikuKananTerbalik(tinggi));
console.log ("-----------------------------------------");
console.log ("-----------------------------------------");

/*
buat sebuah class tokopedia
dimana setiap produk memiliki categori yang berbeda beda
pada saat belanja bisa add to cart
terdapat stock di dalam produk
apabila stock lebih sedikit dari pada request add to cart maka dia akan error
bisa checkout, pada saat checkout cart akan kosong dan stock akan berkurang
menu untuk menambahkan produk, edit produk, delete produk

produk, name, stock, category , warna

category 2
pakaian => ukuran, brand
buku => author,totalPage
*/

class Product {
    constructor(name, stock, category, additionalAttributes) {
        this.name = name;
        this.stock = stock;
        this.category = category;
        this.additionalAttributes = additionalAttributes;
    }
}

class Tokopedia {
    constructor() {
        this.products = [];
        this.cart = [];
    }


addProduct(name, stock, category, warna){
    const product = new Product(name, stock, category, warna);
    this.products.push(product);
}

editProduct(name, updateProduct) {
    const idx = this.products.findIndex(product => product.name === name);
    if (idx !== -1) {
        this.products[idx] = updateProduct;
    }
}

deleteProduct(name) {
    this.products = this.products.filter(product => product.name !== name);
}

addToCart(name, quantity) {
    const product = this.products.find(product => product.name === name);
    if (product && product.stock >= quantity) {
        this.cart.push ({ name: product.name, quantity });
        product.stock -= quantity;
    } else {
        console.log ("Produk tidak tersedia atau stok kurang");
    }
}

checkout() {
    for (const item of this.cart) {
        const product = this.products.find(p => p.name === item.name);
        if (product){
        product.stock -= item.quantity;
    }
}
    this.cart = [];
}
}
const tokopedia = new Tokopedia();

tokopedia.addProduct("Kaos", 50, "Pakaian", "Hitam");
tokopedia.addProduct("Buku Komik", 20, "Buku", "Berwarna");

tokopedia.addToCart("Kaos", 2);
tokopedia.addToCart("Buku Komik", 1);
tokopedia.addToCart("Buku Komik", 30); // ini akan menghasilkan pesan kesalahan karena stok kurang

console.log (tokopedia.products);
console.log (tokopedia.cart);

tokopedia.checkout();

console.log (tokopedia.products);
console.log (tokopedia.cart);

console.log ("-----------------------------------------");
console.log ("-----------------------------------------");

// Create a function to convert exel sheet column title to its corresponding column number
/*
    *Example: 
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28

    *Example:
    Input: AB
    Output: 28
*/

function titleToNumber (kolomTitle){
    let result = 0;
    const temp = "A".charCodeAt(0) - 1;

    for (let i = 0; i < kolomTitle.length; i++){
        const char = kolomTitle.charAt(i);
        result = result * 26 + (char.charCodeAt(0) - temp);
    }
    return result;
}
// beberapa relasi dari Catetan, chat GPT, stackover flow dan lainnya 

// console.log (titleToNumber("A"));
// console.log (titleToNumber("B"));
// console.log (titleToNumber("C"));
// console.log (titleToNumber("Z"));
// console.log (titleToNumber("AA"));
console.log (titleToNumber("AB"));
console.log ("-----------------------------------------");
console.log ("-----------------------------------------");

// Given a non - empty array of integer nums, every element appears twice except for one. Find that single one
/*
    *Example
    Input: nums = [2,2,1]
    Output: 1

    *Example
    Input: nums = [4,1,2,1,2]
    Output: 4

    *Example
    Input: nums = [1]
    Output: 1
*/

function singleNumber(nums){
    let result = 0;
    for (const num of nums){
        result ^= num; // menggunakan operasi XOR "^"
    }
    return result;
}
console.log ("Output Example 1: ", singleNumber([2,2,1]));
console.log ("Output Example 2: ", singleNumber([4,1,2,1,2]));
console.log ("Output Example 3: ", singleNumber([1]));
console.log ("-----------------------------------------");
console.log ("-----------------------------------------");