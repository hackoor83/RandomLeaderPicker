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

// document.getElementById('leaderPicker').addEventListener('click', leaderPicker);
document.getElementById('leaderPicker').addEventListener('click', () => {
    leaderPicker();
    renderTable();
    // console.log(students === shuffler ? 'yes' : 'no');

});

function leaderPicker() {
    let newLeader = students[Math.floor(Math.random() * students.length)];
    document.getElementById('leaderName').innerHTML = newLeader;
}

function shuffler() {
    let shuffledReviewers = students.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    console.table(shuffledReviewers);
    return shuffledReviewers;
}

let reviewersList = document.getElementById('reviewersList');

students.forEach(student => {
    let tableRow = document.createElement('tr');
    reviewersList.appendChild(tableRow);
    let tableData1 = document.createElement('td');
    tableRow.appendChild(tableData1);
    tableData1.innerHTML = student;
});

function renderTable() {
    // let revieweeList = document.getElementById('revieweeList');
    // let tableRow = document.createElement('tr');
    // revieweeList.appendChild(tableRow);
    // let tableHeader = document.createElement('th');
    // tableRow.appendChild(tableHeader);
    // tableHeader.innerHTML = 'Reviewer/Reviewee';

    shuffler().forEach(reviewer => {
        let tableRow = document.createElement('tr');
        revieweeList.appendChild(tableRow);
        let tableData2 = document.createElement('td');
        tableRow.appendChild(tableData2);
        tableData2.innerHTML = reviewer;
    });
}

