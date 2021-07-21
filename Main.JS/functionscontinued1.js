function sayiUret() {
    return Math.ceil(Math.random() * 49)
}
sayiUret()
    // fonksiyon return olmadan burda başka bir fonksiyon olup olmadığını anlamaz o yüzden return yapıp oraya kadar anlamasını sağlarız.

var sayi1 = sayiUret()
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()

console.log("Kolon: " + sayi1 + " " + sayi2 + " " + sayi3 + " " + sayi4 + " " + sayi5 + " " + sayi6)