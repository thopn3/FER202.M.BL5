// Là kỹ thuật phân rã các phần tử của mảng hoặc các thuộc tính của đối tượng thành các biến riêng biệt
const student = [
    {"id": 1, "name": "Quang", "age": 20},
    {"course": 'FER202', "credit": 3},
    10
];

const [info, learn, score] = student;
console.log(info);
console.log(learn);
console.log(score);


const product = {"name": "TV Samsung", "price": 20000000};
const {name:n, price:p} = product;
console.log(n);
console.log(p);