// Mencetak angka genap dari 2 sampai 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Output 2 4 6 8 10 12 14 16 18 20

// Menentukan bialangan terbesar
const a = 10;
const b = 25;
const c = 15;

let terbesar;
if (a > b && a > c) {
  terbesar = a;
} else if (b > a && b > c) {
  terbesar = b;
} else {
  terbesar = c;
}
console.log(`Bilangan terbesar adalah ${terbesar}`);

//Output: bilangan terbesar adalah: 25;

// Mencetak table perkalian
const angka = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}
/*Output:
    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 4 = 20
    5 x 5 = 25
    5 x 6 = 30
    5 x 7 = 35
    5 x 8 = 40
    5 x 9 = 45
    5 x 10 = 50
*/

// menghitung jumlah digit bilangan
const bilangan = 12345;
let jumlahDigit = 0;
let temp = bilangan;

while (temp > 0) {
  temp = Math.floor(temp / 10);
  jumlahDigit++;
}

console.log(`Jumlah digit dari ${bilangan} adalah ${jumlahDigit}`);
//Output:  Jumlah digit dari 12345 adalah 5

/* Menentukan tahun kabisat
ketentuan bulan kabisat
1. Jika angka tahun itu habis dibagi 400, maka tahun itu merupakan tahun kabisat.
2. Jika angka tahun itu tidak habis dibagi 400 tetapi habis dibagi 100, maka tahun itu bukan merupakan tahun kabisat.
3. Jika angka tahun itu tidak habis dibagi 400, tidak habis dibagi 100 akan tetapi habis dibagi 4, maka tahun itu merupakan tahun kabisat.
4. Jika angka tahun tidak habis dibagi 400, tidak habis dibagi 100, dan tidak habis dibagi 4, maka tahun tersebut bukan merupakan tahun kabisat.

 kode berikut untuk menentukan apakah tahun yang diberikan adalah tahun kabisat atau tidak.
 */
const tahun = 2024;
if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
  console.log(`${tahun} adalah tahun kabisat`);
} else {
  console.log(`${tahun} bukan tahun kabisat`);
}
// Output: 2024 adalah tahun kabisat

// Menghitung faktorial kabisat
const n = 5;
let faktorial = 1;

for (let i = 1; i <= n; i++) {
  faktorial *= i;
}
console.log(`Faktorial dari ${n} adalah ${faktorial}`);
// Output: Faktorial dari 5 adalah 120

// mencetak deret fibonacci
const jumlahBilangan = 10;
let jumlah = 0,
  bilangan2 = 1;

for (let i = 0; i < jumlahBilangan; i++) {
  console.log(jumlah);
  let tmpe = jumlah;
  jumlah = bilangan2;
  bilangan2 = tmpe + bilangan2;
}

/*
// Output: 
0
1
1
2
3
5
8
13
21
34
 */

//Menjumlahkan bilangan genap dalam array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let jumlahGenap = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    jumlahGenap += array[i];
  }
}
console.log(`Jumlah bilangan genap adalah ${jumlahGenap}`);
// output: Jumalh bilangan genap adalah 30;


// Mencetak bintang segitiga

const tinggi = 5;

for (let i = 1; i <= tinggi; i++) {
  let baris = '';
  for (let j = 1; j <= i; j++) {
    baris += '*';
  }
  console.log(baris);
}
/* Output:
*
**
***
****
*****
*/

// Menghitung rata rata nilai

const nilai = [80, 90, 85, 70, 95];
let total = 0;

for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}

const rataRata = total / nilai.length;
console.log(`Rata-rata nilai adalah ${rataRata}`);
// Output: Rata-rata nilai adalah 84;