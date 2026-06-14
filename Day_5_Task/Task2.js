const totalMarks = (...marks) => {
  return marks.reduce((total, mark) => total + mark, 0);
};

console.log(totalMarks(80, 90, 70, 60));