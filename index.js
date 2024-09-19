// Optional chaining(?)
const user = {
  addres: {
    city: "Solo",
  },
};
const city = user?.addres?.city;
if (!city) {
  console.log("Kota tidak ditemukan");
}
console.log(city);

const newCity = city ?? "Online";
console.log("Kota", newCity);

//
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial (n - 1);
}
console.log(factorial(5));

// matrix
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (let i in matrix) {
    for (let j in matrix[i]) {
        console.log(matrix[i][j]);
    }
}