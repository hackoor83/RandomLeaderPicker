'use strict'
const students = [
    'Anas Almostafa',
    'Diana Ayoub',
    'Dodo-Logan',
    'Elmira B',
    'Emre',
    'Fadi Kurdi',
    'Hamza Zydan',
    'Jamshid',
    'Jason',
    'Jim',
    'K3M1RD1N',
    'Kenan Alnakoula',
    'Mahmut',
    'Sam (Hisham)'
];

document.getElementById('leaderPicker').addEventListener('click', leaderPicker);

function leaderPicker() {
    let newLeader = students[Math.floor(Math.random() * students.length)];
    document.getElementById('leaderName').innerHTML = newLeader;
}


let reviewersList = document.getElementById('reviewersList');
students.forEach(student => {
    let tableRow = document.createElement('tr');
    reviewersList.appendChild(tableRow);
    let tableData1 = document.createElement('td');
    let tableData2 = document.createElement('td');
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableData1.innerHTML = student;
    document.getElementById('leaderPicker').addEventListener('click', function () {
        tableData2.innerHTML = students[Math.floor(Math.random() * students.length)];
    });
});
