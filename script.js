const recordForm = document.getElementById('record-form');
const msvInput = document.getElementalById('msv');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dateOfbirth');
const classInput = document.getElementById('className');
const gpaInput = document.getElementById('gpa')
const recordList = document.getElementById('record-list');
const editIndexInput = document.getElementById('edit-index');

class Student {
    constructor(msv, name, dob, className, gpa) {
        this.msv = msv;
        this.name = name;
        this.dob = dob;
        this.className = className;
        this.gpa = gpa;
    }

    updateInfo(name, dob, className, gpa) {
        this.name = name;
        this.birthdate = birthdate;
        this.className = className;
        this.gpa = gpa;
    }
}

let students = [];


function addStudent() {
    const msv = document.getElementById("msv").value;
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const className = document.getElementById("className").value;
    const gpa = parseFloat(document.getElementById("gpa").value);

    const newStudent = new Student(msv, name, dob, className, gpa);
    students.push(newStudent);
    displayStudents();
}

function displayStudents() {
    const studentUl = document.getElementById("studentUl");
    studentUl.innerHTML = "";
    
    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = `Mã SV: ${student.msv}, Họ và Tên: ${student.name}, Ngày sinh: ${student.dob}, Lớp học: ${student.className}, GPA: ${student.gpa}`;
        studentUl.appendChild(li);
    });
}
/*
// Display records
function displayRecords() {
  recordList.innerHTML = '';
  console.log(records.length);
  if (records.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="5" style="text-align:center;color:red;">No Record Found</td>`;
    recordList.appendChild(row);
  } else {
    records.forEach((record, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
                    <td>${record.msv}</td>
                    <td>${record.name}</td>
                    <td>${record.dob}</td>
                    <td>${record.className}</td>
                    <td>${record.gpa}</td>
                    <td><button onclick="editRecord(${index})">Edit</button></td>
                    <td class="deleteButton"><button onclick="deleteRecord(${index})">Delete</button></td>
                `;
      recordList.appendChild(row);
    });
  }
}

// Add or Update a record
recordForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const msv = msvInput.value;
  const name = nameInput.value;
  const dob = dobInput.value;
  const className = classInput.value;
  const gpa = gpaInput.value;
  const editIndex = parseInt(editIndexInput.value);

  if (msv && name && dob && classes && gpa) {
    if (editIndex === -1) {
      // Add a new record
      records.push({msv, name, dob, className, gpa});
    } else {
      // Update an existing record
      records[editIndex] = {msv, name, dob, className, gpa};
      editIndexInput.value = -1;
    }

    localStorage.setItem('records', JSON.stringify(records));
    msvInput.value = '';
    nameInput.value = '';
    dobInput.value = '';
    classInput.value = '';
    gpaInput.value = '';
    displayRecords();
  }
});

// Edit a record
function editRecord(index) {
  const recordToEdit = records[index];
  msvInput.value = recordToEdit.msv;
  nameInput.value = recordToEdit.name;
  dobInput.value = recordToEdit.dob;
  classInput.value = recordToEdit.classes;
  gpaInput.value = recordToEdit.gpa;
  editIndexInput.value = index;
}

// Delete a record
function deleteRecord(index) {
  displayRecords();
  let delBtn = document.querySelectorAll('.deleteButton');
  console.log(delBtn);
  delBtn[
    index
  ].innerHTML = `<i id="yesBtn" onclick="confirmDelete(${index})" class="fa-solid fa-check"></i><i id="noBtn" onclick="resetDelete(${index})" class="fa-solid fa-xmark"></i>`;
}

function confirmDelete(index) {
  records.splice(index, 1);
  localStorage.setItem('records', JSON.stringify(records));
  displayRecords();
}

function resetDelete(index) {
  displayRecords();
}

// Initial display
displayRecords();
*/