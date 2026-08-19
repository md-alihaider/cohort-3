const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
let students = [
  {
    id: 1,
    name: "Ali",
    age: 22,
    course: "BCA",
  },
  {
    id: 2,
    name: "Rahul",
    age: 21,
    course: "B.Tech",
  },
];

// POST / students;
app.post("/students", (req, res) => {
  const new_id = students.length + 1;
  const { name, age, course } = req.body;
  const newStudent = {
    id: new_id,
    name,
    age,
    course,
  };
  students.push(newStudent);
  res.send({
    message: "Student added successfully.",
    student: newStudent,
  });
});

// GET / students;
app.get("/students", (req, res) => {
  res.send(students);
});

// GET /students/:id
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((val) => val.id === id);
  if (student) {
    res.send(student);
  } else {
    res.status(404).send({
      message: "User not found.",
    });
  }
});

// PUT /students/:id
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, age, course } = req.body;
  const student = students.find((val) => val.id === id);
  if (!student) {
    return res.status(404).send({
      message: "Student not found.",
    });
  }
  students = students.map((val) =>
    val.id === id ? { ...val, name, age, course } : val,
  );
  res.send({
    message: "Student updated successfully.",
    student: students.find((student) => student.id === id),
  });
});

// DELETE /students/:id
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const studentIndex = students.findIndex((val) => val.id === id);
  if (studentIndex === -1) {
    return res.status(404).send({
      message: "Student not found.",
    });
  }
  let deletedStudent = students.splice(studentIndex, 1);
  res.status(200).send({
    message: "Student deleted successfully.",
    student: deletedStudent,
  });
});

// GET /students/course/:course
app.get("/students/course/:course", (req, res) => {
  let course = req.params.course;
  const studentWithCourse = students.filter((val) => val.course === course);
  if (studentWithCourse.length > 0) {
    res.status(200).send(studentWithCourse);
  } else {
    res.status(404).send({
      message: "Student with this course not found.",
    });
  }
});

app.get("/", (req, res) => {
  console.log("Student Management API is running");
  res.send("Student Management API");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
