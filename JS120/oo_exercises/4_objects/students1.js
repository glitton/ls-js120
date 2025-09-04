/*
METHODS:
info: logs the name and year of the student

*/

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(courseObj) {
      return this.courses.push(courseObj);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      let courseObj = this.courses.filter((course) => course.code === code)[0];
      if (courseObj.note === undefined) {
        courseObj.note = note;
      } else {
        courseObj.note += "; " + note;
      }
    },

    viewNotes() {
      let coursesWithNotes = this.courses.filter((course) =>
        course.hasOwnProperty("note")
      );

      coursesWithNotes.forEach((course) => {
        console.log(`${course.name}: ${course.note}`);
      });
    },

    updateNote(code, note) {
      let courseObj = this.courses.filter((course) => course.code === code)[0];
      courseObj.note = note;
    },
  };
}

let foo = createStudent("Foo", "1st");
foo.info();
foo.listCourses();
foo.addCourse({ name: "Math", code: 101 });
foo.addCourse({ name: "Advanced Math", code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, "Fun course");
foo.addNote(101, "Remember to study for algebra");
foo.viewNotes();
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, "Difficult subject");
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, "Fun course");
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
