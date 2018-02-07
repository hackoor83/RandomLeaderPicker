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

let counter = 0;
const firstReviewers = students.slice(0, students.length / 2);
const secondReviewers = students.slice(students.length / 2);
console.table(firstReviewers);
console.table(secondReviewers);

document.getElementById('leaderPicker').addEventListener('click', () => {
    leaderPicker();
    shuffler();
    counter += 1;
    // console.log(counter);
    document.getElementById('share').innerHTML = 'Take a screenshot, and paste it in Class 13\'s Slack channel:';
    document.getElementById('class13Slack').innerHTML = "<a href='https://hackyourfuture.slack.com/messages/C7Z9PUY5B'>Click Here to go immidiately to Class13 Slack channel!</a>";

    if (counter > 1) {
        document.getElementById('leaderName').innerHTML = 'It is not fair to run the random selection more than once!!';
        document.getElementById('tablesContainer').innerHTML = 'You may reload the page to get a new Leader and a new list.';
    }
});

function leaderPicker() {
    let newLeader = students[Math.floor(Math.random() * students.length)];
    document.getElementById('leaderName').innerHTML = newLeader;
}

function shuffler() {
    let shuffledReviewees = firstReviewers.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    let shuffledReviewers = secondReviewers.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);

    shuffledReviewers.forEach(student => {
        let tableRow = document.createElement('tr');
        document.getElementById('revieweeList').appendChild(tableRow);
        let tableData2 = document.createElement('td');
        tableRow.appendChild(tableData2);
        tableData2.innerHTML = student;
    });

    shuffledReviewees.forEach(student => {
        let tableRow = document.createElement('tr');
        document.getElementById('reviewersList').appendChild(tableRow);
        let tableData1 = document.createElement('td');
        tableRow.appendChild(tableData1);
        tableData1.innerHTML = student;
    });

}