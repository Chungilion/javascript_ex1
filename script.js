const recordForm = document.getElementById('record-form');
const msvInput = document.getElementalById('msv');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dateOfbirth');
const classNameInput = document.getElementById('className');
const gpaInput = document.getElementById('gpa')
const recordList = document.getElementById('record-list');
const editIndexInput = document.getElementById('edit-index');

// Initialize records from local storage
let records = JSON.parse(localStorage.getItem('records')) || [];
console.log(records.length);

// Display records
function displayRecords() {
  recordList.innerHTML = '';
  console.log(records.length);
  if (records.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="7" style="text-align:center;color:red;">No Record Found</td>`;
    recordList.appendChild(row);
  } else {
    records.forEach((record, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
					<td>${record.msv}</td>
                    <td>${record.name}</td>
                    <td>${record.dateOfbirth}</td>
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
  const dateOfbirth = dateOfbirthInput.value;
  const className = classNameInput.value;
  const gpa = gpaInput.value;
  const editIndex = parseInt(editIndexInput.value);

  if (msv && name && dateOfbirth && className && gpa) {
    if (editIndex === -1) {
      // Add a new record
      records.push({ msv, name, dateOfbirth, className, gpa });
    } else {
      // Update an existing record
      records[editIndex] = { msv, name, dateOfbirth, className, gpa };
      editIndexInput.value = -1;
    }

    localStorage.setItem('records', JSON.stringify(records));
	msvInput.value = '';
    nameInput.value = '';
    dateOfbirthInput.value = '';
	classNameInput.value = '';
    gpaInput.value = '';
    displayRecords();
  }
});

// Edit a record
function editRecord(index) {
  const recordToEdit = records[index];
  msvInput.value = recordToEdit.msv;
  nameInput.value = recordToEdit.name;
  dateOfbirthInput.value = recordToEdit.dateOfbirth;
  classNameInput.value = recordToEdit.className;
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