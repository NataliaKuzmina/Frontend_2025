const div = document.querySelector(".div");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(".btn");
const sortBtn = document.querySelector(".btn2");
const inputName = document.querySelector(".inputName");
const inputSurname = document.querySelector(".inputSurname");
const addStudent = document.querySelector(".btn3");
const form = document.querySelector("form");

addStudent.addEventListener("click", (e) => {
  e.preventDefault();
  const newStudent = new Student(inputName.value, inputSurname.value, []);
  student.push(newStudent);
  console.log(student);
  showStudents();
});

const student = [
  new Student("Мария", "Романова", [4, 5, 4, 4]),
  new Student("Василий", "Уваров", [3, 3, 2, 3]),
  new Student("Александр", "Жданов", [4, 5, 5, 5]),
];

button.addEventListener("click", () => {
  let findItem = student.find((item) => item.surname === input1.value);
  if (Number(input2.value) >= 1 && Number(input2.value) <= 5) {
    findItem.arrGrades.push(Number(input2.value));
  }

  showStudents();
  console.log(student);
});

sortBtn.addEventListener("click", () => {
  student.sort((a, b) => {
    return a.avg() - b.avg();
  });
  showStudents();
});

function showStudents() {
  div.innerHTML = "";
  student.forEach((item) => {
    let pName = document.createElement("p");
    let pSurname = document.createElement("p");
    let pGrades = document.createElement("p");
    let pAvgGrades = document.createElement("p");
    let card = document.createElement("div");
    pName.innerHTML = item.name;
    pSurname.innerHTML = item.surname;
    pGrades.innerHTML = `Оценки : ${item.arrGrades}`;
    let avg = item.avg();
    console.log(avg);
    pAvgGrades.innerHTML = `Средняя оценка: ${avg}`;
    card.append(pName, pSurname, pGrades, pAvgGrades);
    if (avg < 3.0) {
      card.classList.add("colorCard");
    }
    card.classList.add("border");
    div.append(card);
  });
}

showStudents();
