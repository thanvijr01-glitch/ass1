const students = [
  { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
  { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
  { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
  { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
  { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
  { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
  { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
  { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
  { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
  { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];

console.log(students);

const names=students.map(student=>student.name);
const namecourse=students.map(student=>({name:student.name, course:student.course}));
const withstatus=students.map(student=>({...student, status:student.marks>=60? "Pass":"Fail"}));
const nameCourseString=students.map(student=>{student.name, student.course});
const increasedmarks=students.map(student=>({...student, marks:student.marks}));
console.log(names);
console.log(namecourse);
console.log(withstatus);
console.log(nameCourseString);
console.log(increasedmarks);

const csStudents = students.filter(student => student.course === "Computer Science");
console.log("Computer Science Students:", csStudents);


const highScorers = students.filter(student => student.marks > 80);
console.log("High Scorers:", highScorers);


const studentsWithFeesPaid = students.filter(student => student.feesPaid);
console.log("Students with Fees Paid:", studentsWithFeesPaid);


const matureHighScorers = students.filter(student => student.age > 20 && student.marks > 70);
console.log("Mature High Scorers:", matureHighScorers);


const strugglingMechanical = students.filter(student => student.course === "Mechanical" && student.marks < 85);
console.log("Struggling Mechanical Students:", strugglingMechanical);
