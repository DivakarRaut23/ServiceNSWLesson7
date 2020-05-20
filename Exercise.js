// class Square {
//     constructor (sideLength){
//         this.sideLength = sideLength
//     }

//     get area (){
//         return this.sideLength * this.sideLength ;
//     }

//     set area(area){
//         this.sideLength = Math.sqrt(area);
//     }
// }


// let mySquare = new Square("10");

// console.log(mySquare.area);



// Inheritance

//1 

class Person {
    constructor (firstName, lastName, age){

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo (){
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }
}

    
var me = new Person ("Divakar", "Raut", 23);
console.log(me.getInfo());
console.log(me);



class Student extends Person {

    constructor (firstName,lastName, age, grades){

        super(firstName, lastName, age);

        this.grades = grades ;
    }
}

    get average (){
        let totalGrades =0;
        for (let i = 0; i < grades.length; i++) {
            const grades = grades[i];
                totalGrades += grades;

            
        }
        return totalGrades/this.grades.length;
    }
    console.log(myStudent.average());
    let myStudent = new Student ("Azamat", "Bhagatov", 23, [89,86,79,92,95,85]);


    // 6 Create a class called Teacher that extends Person. Teacher should have a property called students that should be an array of Student objects representing the students in their class
class Teacher extends Person {
    constructor(firstName, lastName, age, students) {
        super(firstName, lastName, age);
        this.students = students;
    }

    // 7 Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number.
    getStudentAverageGrade() {
        // let totalGrades = 0;
        // for (let i = 0; i < this.students.length; i++) {
        //     let student = this.students[i];
        //     totalGrades += student.getAverageGrade();
        // }
        let totalGrades = this.students.reduce(function(currentTotal, student) {
            return currentTotal + student.getAverageGrade();
        }, 0);

        return totalGrades / this.students.length;
    }

    // 8 Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call to super.getInfo
    getInfo() {
        return super.getInfo() + ". The average grade for their students is " + this.getStudentAverageGrade();
    }
}

let students = [
    new Student("Divakar", "Raut", 23, [87, 68, 78, 91]),
    new Student("Zlatan", "Ibrahimovic", 28, [46, 68, 91]),
    new Student("Kumar", "Sangakarra", 21, [45, 56, 75, 92]),
    new Student("David", "Beckham", 40, [90, 98, 88, 91, 96]),
];


let myTeacher = new Teacher("Luke", "Parker", 23, students);

console.log(myTeacher);
console.log(myTeacher.getInfo());
