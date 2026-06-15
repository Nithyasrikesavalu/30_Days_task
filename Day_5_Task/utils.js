export function calculateTotalMarks(...marks) {
  return marks.reduce((total, mark) => total + mark, 0);
}