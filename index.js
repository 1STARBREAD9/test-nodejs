const student = {

    name: 'Marie',
    age: 20,
    courses: []
}

student.age = 25

student.grade = 'A'


student.courses.push('Math', 'Physics', 'Chemistry'); 






console.log(student.age, student.grade, student.courses,); // Exo 1

console.log(student.courses.indexOf('Physics')) // Exo 2


console.log(student.courses.slice(0,2)) // Exo 3