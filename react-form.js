window.addEventListener("load", function () {
  // Initial block
  const state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    ocupationType: "blank",
    studentData: {
      school: "",
      schoolYear: "",
      schoolGroup: "",
    },
    workerData: {
      organization: "",
      position: "",
    },
  };

  // --- Відповідає за зміну об'єкта стану -----

  const firstName = this.document.getElementById("first_name");
  firstName.addEventListener("keyup", function () {
    state.firstName = firstName.value;
    render();
  });

  const lastName = this.document.getElementById("last_name");
  lastName.addEventListener("keyup", function () {
    state.lastName = lastName.value;
    render();
  });

  const email = this.document.getElementById("email");
  email.addEventListener("keyup", function () {
    state.email = email.value;
    render();
  });

  const password = this.document.getElementById("password");
  password.addEventListener("keyup", function () {
    state.password = password.value;
    render();
  });

  const age = this.document.getElementById("age");
  age.addEventListener("keyup", function () {
    state.age = age.value;
    render();
  });

  const ocupationType = this.document.getElementById("ocupation_type");

  const studentBlock = this.document.getElementById("student_block");
  const workerBlock = this.document.getElementById("worker_block");

  const school = this.document.getElementById("school");
  school.addEventListener("keyup", function () {
    state.studentData.school = school.value;
    render();
  });

  const schoolYear = this.document.getElementById("school_year");
  schoolYear.addEventListener("keyup", function () {
    state.studentData.schoolYear = schoolYear.value;
    render();
  });

  const schoolGroup = this.document.getElementById("school_group");
  schoolGroup.addEventListener("keyup", function () {
    state.studentData.schoolGroup = schoolGroup.value;
    render();
  });

  const workerOrganization = this.document.getElementById("organization");
  workerOrganization.addEventListener("keyup", function () {
    state.workerData.organization = workerOrganization.value;
    render();
  });
  const workerPosition = this.document.getElementById("position");
  workerPosition.addEventListener("keyup", function () {
    state.workerData.position = workerPosition.value;
    render();
  });

  ocupationType.addEventListener("change", function () {
    state.ocupationType = ocupationType.value;
    render();
  });

  const invalidEmail = this.document.getElementById("invalidEmail");

  const reset = this.document.getElementById("reset");

  // Reset
  reset.addEventListener("click", function () {
    state.firstName = "";
    state.lastName = "";
    state.email = "";
    state.age = "";
    state.password = "";
    state.ocupationType = "blank";
    state.studentData = {
      school: "",
      schoolGroup: "",
      schoolYear: "",
    };
    state.workerData = {
      organization: "",
      position: "",
    };

    render();
  });

  // --- Відображення елементів форми відповідно до об'єкту стану форми ---

  function render() {
    console.log(state);

    firstName.value = state.firstName;
    lastName.value = state.lastName;
    email.value = state.email;
    password.value = state.password;
    age.value = state.age;
    ocupationType.value = state.ocupationType;

    // if (state.email == "") {
    //   invalidEmail.style.display = "block";
    // } else {
    //   invalidEmail.style.display = "none";
    // }

    // умова ? <умова ісина> : <умова хибна>
    invalidEmail.style.display = state.email == "" ? "block" : "none";

    studentBlock.style.display = "none";
    workerBlock.style.display = "none";
    if (state.ocupationType == "student") {
      studentBlock.style.display = "block";

      school.value = state.studentData.school;
      schoolGroup.value = state.studentData.schoolGroup;
      schoolYear.value = state.studentData.schoolYear;
    }
    if (state.ocupationType == "worker") {
      workerBlock.style.display = "block";
      workerOrganization.value = state.workerData.organization;
      workerPosition.value = state.workerData.position;
    }
  }

  render();
});
