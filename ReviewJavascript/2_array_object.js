const numbers = [3, 4, 7, 1, "Hello", true, 20.5];

function sumNumbers(numbers=[]){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(typeof numbers[i] === 'number'){
            sum += numbers[i];
        }
    }
    return sum;
}

console.log('Sum = '+ sumNumbers(numbers));

const students = [
    {"id": 1, "name": "Duc", "age": 20},
    {"id": 2, "name": "Hoang", "age": 22},
    {"id": 3, "name": "Dung", "age": 19},
    {"id": 4, "name": "Hoa", "age": 20},
    true
];

/**
 * 1. In danh sách các sinh viên
 * 2. Thêm mới 1 phần tử vào mảng -> In danh sách các sinh viên
 * 3. Tìm sinh viên có tên bắt đầu bằng chữ cái cần tìm (hoặc chứa chữ cái cần tìm) -> In dssv
 * 4. Loại bỏ 1 sinh viên khỏi mảng theo id -> In dssv
 */

// Print array
function printStudents(data=[]){
    console.log("ID\tName\tAge");
    // data.forEach(e => {
    //     console.log(`${e.id}\t${e.name}\t${e.age}`);
    // });
    data.map(e=>{
        console.log(`${e.id}\t${e.name}\t${e.age}`);
    });
}

// Thêm mới 1 phần tử vào vị trí cuối của mảng
const newStudent = {"id": 5, "name": "Nam", "age": 20};
students.push(newStudent);
printStudents(students);

// Tìm kiếm
function findStudent(search, data=[]){
    const result = data.filter(s=>s.name.toLowerCase().startsWith(search.toLowerCase()));
    return result;
}
console.log("Search result:");
const searchResult = findStudent('d', students);
if(searchResult.length!=0){
    printStudents(searchResult);
}else{
    console.log("Not found");
}

// Loai 1 hoac nhieu phan tu trong mang
function removeStudent1(_id, data=[]){
    const result = data.filter(s=>s.id != _id);
    return result;
}

function removeStudent2(_id, data =[]){
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === _id){
            data.splice(i, 1);
            break;
        }
    }
}
console.log("Students after remove:");
removeStudent2(4, students);
printStudents(students);
