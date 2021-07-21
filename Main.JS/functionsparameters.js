// function sayiUret(ustLimit) {
//     return Math.ceil(Math.random() * ustLimit)
// }
// sayiUret()

// var sayi1 = sayiUret(49)
// var sayi2 = sayiUret(49)
// var sayi3 = sayiUret(49)
// var sayi4 = sayiUret(49)
// var sayi5 = sayiUret(49)
// var sayi6 = sayiUret(49)
// ustLimit diye bir değişken atarız ve değişkenlerin içine girdiğimiz sayı esas alınır.



// function sayiUret(ustLimit = 49) {
//     return Math.ceil(Math.random() * ustLimit)
// }
// sayiUret()

// var sayi1 = sayiUret()
// var sayi2 = sayiUret()
// var sayi3 = sayiUret()
// var sayi4 = sayiUret()
// var sayi5 = sayiUret()
// var sayi6 = sayiUret()
// değişkenlerin içine parametre girmediğimizde yine ustLimite atadığımız değere kadar sayı üretir.


// function sayiUret(ustLimit = 49) {
//     return Math.ceil(Math.random() * ustLimit)
// }
// sayiUret()

// var sayi1 = sayiUret(1000)
// var sayi2 = sayiUret()
// var sayi3 = sayiUret()
// var sayi4 = sayiUret()
// var sayi5 = sayiUret()
// var sayi6 = sayiUret()
//değişkenin içine atadığımız değer değiştiği için ilk değişken 1000 e kadar değer alırken diğerleri yine ustLimit kadar değer alacak.
//Burada ustLimit sadece bir değişkendir.


// var degisken = "değer";

function sayiUret(ustLimit) {
    // var degisken = "değer";
    return Math.ceil(Math.random() * ustLimit)
}
// console.log(degisken)    global alanda olduğu zaman yazdırır.

sayiUret()
    // console.log(degisken)    bunu da yazdırmazdı. Ancak function girintisinde olmasaydı yani global alnda olsaydı durum değişir.
    // console.log(ustLimit)    ustLimit burda hiçbir anlam ifade etmez dolayısıyla da yazdırılmaz.
var sayi1 = sayiUret(1000)
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()
    // 1. değişken için değer atarken diğer değerler için NaN verilir. Çünkü ustLimit tanımlı değildir.
console.log("Kolon: " + sayi1 + " " + sayi2 + " " + sayi3 + " " + sayi4 + " " + sayi5 + " " + sayi6)