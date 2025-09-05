/*
Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
*/

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
      return this.courses;
    },

    addNote(code, note) {
      let codeForCourseObj = this.courses.find(
        (course) => course.code === code
      );
      if (codeForCourseObj.note === undefined) {
        codeForCourseObj.note = note;
      } else {
        codeForCourseObj.note += "; " + note;
      }
    },

    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(code, note) {
      let codeForCourseObj = this.courses.find(
        (course) => course.code === code
      );
      if (codeForCourseObj) {
        codeForCourseObj.note = note;
      } else {
        console.log("Sorry, no course was found.");
      }
    },
  };
}

// let foo = createStudent("Foo", "1st");
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: "Math", code: 101 });
// foo.addCourse({ name: "Advanced Math", code: 102 });
// console.log(foo.listCourses());
// foo.addNote(101, "Fun course");
// foo.addNote(101, "Remember to study for algebra");
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, "Difficult subject");
// foo.viewNotes();
// foo.updateNote(101, "Fun course");
// foo.viewNotes();

const school = {
  students: [],

  addStudent(name, year) {
    if (!["1st", "2nd", "3rd", "4th", "5th"].includes(year)) {
      console.log("Invalid Year");
    } else {
      this.students.push(new createStudent(name, year));
    }
    let addedStudent = this.students[this.students.length - 1];
    return addedStudent;
  },

  enrollStudent(name, course) {
    let studentToEnroll = this.students.find(
      (student) => student.name === name
    );
    if (studentToEnroll) {
      studentToEnroll.addCourse(course);
    }
  },

  addGrade(name, courseName, grade) {
    let studentToGrade = this.students.find((student) => student.name === name);

    if (studentToGrade) {
      let courseToGrade = studentToGrade.courses.find(
        (course) => course.name === courseName
      );
      if (courseToGrade) {
        courseToGrade.grade = grade;
      } else {
        console.log("No student or course exists in our records.");
      }
    } else {
      console.log("No student exists in our records. ");
    }
  },

  getReportCard(name) {
    let studentName = this.students.find((student) => student.name === name);
    studentName.courses.forEach((courseObj) => {
      if (courseObj.grade !== undefined) {
        console.log(`${courseObj.name}: ${courseObj.grade}`);
      } else {
        console.log(`${courseObj.name}: In progress`);
      }
    });
  },

  courseReport(courseName){
    /*
    Log the grades of all students for a given course name.  Only students with grades are part of the course report
    input: student array of objects
    output: student name: grade, course average
    rules: only log student names that have grades in the given subject
    A:
    Iterate over the student array of objects
    - for each object 
      find the courseName that matches the input parameter
    */

  }
};

let paul = school.addStudent("Paul", "3rd");
let mary = school.addStudent("Mary", "1st");
let kim = school.addStudent("Kim", "2nd");
school.enrollStudent("Paul", { name: "Math", code: 101 });
school.enrollStudent("Paul", { name: "Advanced Math", code: 102, grade: 90 });
school.enrollStudent("Paul", { name: "Physics", code: 202 });
school.addGrade("Paul", "Math", 95);
school.addGrade("Paul", "Advanced Math", 90);

school.enrollStudent("Mary", { name: "Math", code: 101, grade: 91 });
school.enrollStudent("Kim", { name: "Math", code: 101, grade: 93 });
school.enrollStudent("Kim", { name: "Advanced Math", code: 102, grade: 90 });

school.getReportCard("Paul");
// school.getReportCard("Kim");
// school.getReportCard("Mary");
// console.log(JSON.stringify(paul.courses, null, 2));
