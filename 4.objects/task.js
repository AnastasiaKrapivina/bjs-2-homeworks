function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    console.log('Студент отчислен');
    return;
  } else {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks || !this.marks.length) {
    return 0;
  } else {
    return this.marks.reduce((sum, item, index, arr) => sum + (item / arr.length), 0);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
