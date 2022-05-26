class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = "sName";
        this.school = "Hridoypur College";
    }
}

const student1 = new Student(12, "Shovo");
const student2 = new Student(13, "mahi");
const student3 = new Student(15, "Bappi");

console.log(student1, student2, student3);