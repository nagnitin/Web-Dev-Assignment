function calculateGrade(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks >= 70 && marks <= 90) {
        return 'B';
    } else if (marks >= 50 && marks < 70) {
        return 'C';
    } else {
        return 'F';
    }
}
const studentMarks = 91;
const studentGrade = calculateGrade(studentMarks);
console.log(`Student's grade: ${studentGrade}`);
