const employees = [
  {
    name: "Arun",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Present"
  },
  {
    name: "Priya",
    checkIn: "-",
    checkOut: "-",
    status: "Absent"
  },
  {
    name: "Karthik",
    checkIn: "09:15",
    checkOut: "18:10",
    status: "Present"
  }
];


const presentEmployees = employees.filter(emp => emp.status === "Present");
console.log("Present Employees:");
console.log(presentEmployees);


const absentEmployees = employees.filter(emp => emp.status === "Absent");
console.log("Absent Employees:");
console.log(absentEmployees);


console.log("Total Present Count:", presentEmployees.length);


const searchName = "Arun";
const employee = employees.find(emp => emp.name === searchName);

if (employee) {
  console.log("Employee Found:", employee);
} else {
  console.log("Employee Not Found");
}