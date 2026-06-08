const student = {
name :"Sri",
marks : 85,
location :"Chennai",
role :"Developer"
};

for(let key in student){
    if (key === "marks"){
        if(student[key]>35){
console.log(student.name +"Pass");
}else{
console.log(student.name +"Fail");
}
}
}
