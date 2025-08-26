class Student {
  constructor(name, surname, arrGrades) {
    this.name = name;
    this.surname = surname;
    this.arrGrades = arrGrades;
  }
  avg() {
    if (this.arrGrades.length === 0) {
      return 0;
    } else {
      return (
        this.arrGrades.reduce((acc, item) => acc + item, 0) /
        this.arrGrades.length
      );
    }
  }
}
