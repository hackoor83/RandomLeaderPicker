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
let newReviewersList = document.getElementById('reviewersList2')
students.forEach(student => {
    let tableRow = document.createElement('tr');
    reviewersList.appendChild(tableRow);
    let tableData1 = document.createElement('td');
    tableRow.appendChild(tableData1);
    tableData1.innerHTML = student;
});

let newStudent = [];

for (let i = students.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let randomElement = students[randomIndex];
    students[randomIndex] = students[i];
    students[i] = randomElement;

}
students.forEach(student => {
    let tableRow2 = document.createElement('tr');

    newReviewersList.appendChild(tableRow2);
    let tableData2 = document.createElement('td');
    tableRow2.appendChild(tableData2);
    document.getElementById('leaderPicker').addEventListener('click', function () {
        tableData2.innerHTML = student;

    });
})

