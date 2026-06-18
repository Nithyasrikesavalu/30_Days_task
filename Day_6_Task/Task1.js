const students = [
  { name: "Arun", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Karthik", marks: 45 },
  { name: "Divya", marks: 78 },
  { name: "Rahul", marks: 35 }
];


console.log("Students List:");
students.forEach(student =>
  console.log(`${student.name} - ${student.marks}`)
);


const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log("Total Marks:", totalMarks);


const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);


const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);
console.log("Topper:", topper.name, topper.marks);


console.log("Pass/Fail Status:");
students.forEach(student => {
  const status = student.marks >= 40 ? "Pass" : "Fail";
  console.log(`${student.name} - ${status}`);
});