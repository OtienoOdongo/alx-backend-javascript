interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'Emily',
  lastName: 'Wachira',
  age: 21,
  location: 'Nyeri'
};

let student2: Student = {
  firstName: 'Tobia',
  lastName: 'Ochia',
  age: 23,
  location: 'Mombasa'
};

const studentsList: Student[] = [student1, student2];

// Create a function to render the table
function renderTable() {
  const table = document.createElement('table');
  const headerRow = table.insertRow(0);
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);

  for (let i = 0; i < studentsList.length; i++) {
    const student = studentsList[i];
    const row = table.insertRow(i + 1);
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  }

  document.body.appendChild(table);
}

// Call the renderTable function to render the table
renderTable();



