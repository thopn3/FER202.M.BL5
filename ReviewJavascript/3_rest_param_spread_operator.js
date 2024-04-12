// Tham số rest
function sumNumbers(...numbers){
    let sum = 0;
    numbers.forEach(e=> {
        sum += e;
    })
    console.log("Sum numbers: " + sum);
}

sumNumbers(10, 20, 30);
const numbers = [1, 2, 3];
sumNumbers(...numbers); // Rải các phần tử của mảng numbers vào hàm // sumNumbers(1,2,3)

// Toán tử rải (spread)
const arr1 = ["Hello", "World", true];
const arr2 = [{"name": "David"}, 3.5];
const arr3 = [...arr1, 10, 20, ...arr2];
console.log(arr3);