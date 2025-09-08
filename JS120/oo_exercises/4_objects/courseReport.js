courseReport(courseName) {
    let allGrades = [];
    console.log(`=${courseName} Grades=`);

    this.students.forEach((student) => {
      let studentName = student.name;

      student.courses.forEach((course) => {
        if (course.name === courseName && course.grade !== undefined) {
          allGrades.push(course.grade);

          console.log(`${studentName}: ${course.grade}`);
        }
      });
    });
    console.log("---");

    if (allGrades.length === 0) {
      console.log(`There are no grades to report for ${courseName}`);
      return;
    }

    let average =
      allGrades.reduce((sum, val) => sum + val, 0) / allGrades.length;
    console.log(`Course Average: ${average}`);
    console.log("");
  }