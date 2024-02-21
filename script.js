class Student {
    constructor(id, fullName, birthdate, className, gpa) {
        this.id = id;
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.className = className;
        this.gpa = gpa;
    }

    updateInfo(fullName, birthdate, className, gpa) {
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.className = className;
        this.gpa = gpa;
    }
}

// Mảng lưu danh sách Sinh viên
let students = [];

// Hàm thêm Sinh viên
function addStudent() {
    const studentId = document.getElementById("studentId").value;
    const fullName = document.getElementById("fullName").value;
    const birthdate = document.getElementById("birthdate").value;
    const className = document.getElementById("className").value;
    const gpa = parseFloat(document.getElementById("gpa").value);

    const newStudent = new Student(studentId, fullName, birthdate, className, gpa);
    students.push(newStudent);
    displayStudents();
}

// Hàm hiển thị danh sách Sinh viên
function displayStudents() {
    const studentUl = document.getElementById("studentUl");
    studentUl.innerHTML = "";
    
    students.forEach(student => {
        const li = document.createElement("li");
        row.innerHTML = `
					<td>${student.studentID}</td>
                    <td>${student.fullName}</td>
                    <td>${student.birthdate}</td>
                    <td>${student.className}</td>
					<td>${student.gpa}</td>
                    <td><button onclick="editRecord(${index})">Edit</button></td>
                    <td class="deleteButton"><button onclick="deleteRecord(${index})">Delete</button></td>
                `;
    });
}