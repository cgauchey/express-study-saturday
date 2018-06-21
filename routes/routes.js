// Express routes
const router = require('express').Router()

// Create Student Models
let students = [
	{ id : 0, name : 'Dan'},
	{ id : 1, name : 'Rohan'},
	{ id : 2, name : 'Sol'},
	{ id : 3, name : 'Ella'},
	{ id : 4, name : 'Michael'},
	{ id : 5, name : 'Karen'},
];

let tests = [
	{id : 0, subject : 'Physics', score : 99, studentId : 0},
	{id : 1, subject : 'English', score : 78, studentId : 1},
	{id : 2, subject : 'Math', score : 90, studentId : 3},
	{id : 3, subject : 'English', score : 55, studentId : 3},
	{id : 4, subject : 'Physics', score : 88, studentId : 4},
]

// Get Students

// Get Student by Id


// Add Student


// Delete Student

// Update Student



// Get Tests


// Get Test by Id

// Add Score


// Delete Score


// Update Score


// Get Mean Score for Student


// Get Top Scoring Student




module.exports = router