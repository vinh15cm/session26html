// cách 1 array literal
const course = ["HTML", 1, null, NaN, underfied]

console.log(sources);

// cách 2 : dùng đối tượng array
const array = new Array("HTML", "CSS");

// kiểm tra độ dài cuản mảngv
const arrayLength = sources.length;
console.log("độ dài mảng", arrayLength);
// truy xuất ccs phần tử của mảng
console.log(courses[1]);

// Lặp qua các phần tử của mảng
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
    // i tượng trung cho index (vị trí)
}

// 1 số phương thức làm việc với mảng

// 1.Thêm phần tử vào cuối mảng
courses.push("JavaScript");
console.log("mảng sau khi push:", courses);

// 2.Xóa phần tử ở cuối mảng
const itemDelete = courses.pop();
console.log("phần tử vừa xóa :", itemDelete);
console.log("mảng sau khi pop:", courses);

// 3.Thêm phần tử vào đầu mảng
courses.unshift("PHP");
console.log("mảng sau khi unshift:", courses);

// 4.Xóa phần tử ở đầu mảng
const itemDelete2 = courses.shift();
console.log("phần tử vừa xóa :", itemDelete2);
console.log("mảng sau khi shift:", courses);
// 5. chuyển đổi mảng thành chuỗi
const arrayConvertToString = courses.toString();
console.group("mảng sau khi toString:", arrayConvertToString);
//6 chuyển đổi mảng thành chuỗi bằng join()
const newArray = array.join("+");
console.log("magr sau khi join :", newArray);
