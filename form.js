window.addEventListener("load", function () {
  console.log("Документ завантажений");

  const firstName = this.document.getElementById("first_name");
  const lastName = this.document.getElementById("last_name");
  const email = this.document.getElementById("email");
  const password = this.document.getElementById("password");
  const age = this.document.getElementById("age");

  const studentBlock = this.document.getElementById("student_block");
  const workerBlock = this.document.getElementById("worker_block");

  const school = this.document.getElementById("school");
  const schoolYear = this.document.getElementById("school_year");
  const schoolGroup = this.document.getElementById("school_group");

  const workerOrganization = this.document.getElementById("organization");
  const workerPosition = this.document.getElementById("position");

  const ocupationType = this.document.getElementById("ocupation_type");
  //ocupationType.onchange = function () {
  ocupationType.addEventListener("change", function () {
    if (ocupationType.value == "blank") {
      studentBlock.style.display = "none";
      workerBlock.style.display = "none";
    } else if (ocupationType.value == "student") {
      studentBlock.style.display = "block";
      workerBlock.style.display = "none";
    } else if (ocupationType.value == "worker") {
      studentBlock.style.display = "none";
      workerBlock.style.display = "block";
    } else if (ocupationType.value == "retreated") {
      studentBlock.style.display = "none";
      workerBlock.style.display = "none";
    }
  });

  const reset = this.document.getElementById("reset");
  reset.addEventListener("click", function () {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    age.value = "";

    if (ocupationType.value == "student") {
      // Скинути поля для студента
      school.value = "";
      schoolYear.value = "";
      schoolGroup.value = "";
    } else if (ocupationType.value == "worker") {
      // Скинути поля для працівника
      workerOrganization.value = "";
      workerPosition.value = "";
    } else if (ocupationType.value == "retreated") {
    }
    ocupationType.value = "blank";
    studentBlock.style.display = "none";
    workerBlock.style.display = "none";
  });
});
