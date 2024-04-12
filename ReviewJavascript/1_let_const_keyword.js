// let: Là 1 từ khóa sử dụng để khai báo biến trong JS
//      Phạm vi sử dụng trong code block {}
let name = "Messi";
let age = 20;
console.log("Name:" + name + " - Age: "+age);
console.log(`Name: ${name} - Age: ${age}`);

function showInfo(){
    let name = "Ronaldo";
    let age = 39;
    console.log(`Name: ${name} - Age: ${age}`);
}

showInfo();

// const (constant): Sử dụng để khai báo các biến (Primative type, array, object)
const PI = 3.14;
const student = {"id": 1, "name": "Hoang"}; // JSON object type
student.id = 2;
console.log(`ID: ${student.id} - Name: ${student.name}`);