const apiURl = 'http://localhost:8190/w-21/employees';

console.log(fetch(apiURl));


fetch(apiURl)
  .then(response => {
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    console.log('Dane z API:', data);
    const employees = data.employees

    // display employees by list
    const employeeList = document.getElementById('employeeList');
    
    employees.forEach(employee => {
        const listItem = document.createElement('li');
        listItem.textContent = `
        ${employee.name} ${employee.surname} - ${employee.salary} zł phone: ${employee.phone} email: ${employee.email}`;
        employeeList.appendChild(listItem);
    });

    // display employees in table
    const tableBody = document.getElementById('employeeTableBody');

    employees.forEach(employee => {
        const row = tableBody.insertRow();
  
        const nameCell = row.insertCell(0);
        const surnameCell = row.insertCell(1);
        const salaryCell = row.insertCell(2);
        const phoneCell = row.insertCell(3);
        const emailCell = row.insertCell(4);
  
        nameCell.textContent = employee.name;
        surnameCell.textContent = employee.surname;
        salaryCell.textContent = employee.salary + ' zł';
        phoneCell.textContent = employee.phone;
        emailCell.textContent = employee.email;
      });

})
.catch(error => {
      // Obsługa błędów
      console.error('Błąd podczas pobierania danych z API:', error);
});
  
