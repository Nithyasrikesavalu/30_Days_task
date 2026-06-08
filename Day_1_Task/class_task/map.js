const students = [
    {name: "Sri",marks: 85,city: "Chennai"},
    {name: "Arun",marks: 20,city: "Madurai"}
];

students.map((students)=>{
    for(let key in students){
        console.log(key + ":"+ students[key]);
    }
    if(students.marks>35){
        console.log(students.name + " Pass");
    }else{
        console.log(students.name + " Fail");
    }
}
);
    