// start form  validation

const form = document.getElementById("form");
const username = document.getElementById("username");
const howmanypeople = document.getElementById("number");
const dateandtime = document.getElementById("date");
const yournumber = document.getElementById("tel");
const message = document.getElementById("text");

const thankYou = document.getElementById("thankYou");

console.log(form);
form.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  checkInput();

  console.log("submit");

  document.getElementById("form").reset();
  //thankYou.classList.toggle("hidden");
  //form.querySelector(".hidden").style.display = "none";
});

function checkInput() {
  const usernamevalue = username.value.trim();
  const howmanypeoplevalue = howmanypeople.value.trim();
  const dateandtimevalue = dateandtime.value.trim();
  const yournumberevalue = yournumber.value.trim();
  const messagevalue = message.value.trim();

  var iserror = 0;
  var issuccess = 0;

  if (usernamevalue === "") {
    setError(username, " Username Cannot Be Blank ");
    1;
    iserror = 1;
  } else {
    setSuccess(username);
    issuccess = 1;
  }

  if (howmanypeoplevalue === "") {
    setError(howmanypeople, " How Many People Cannot Be Blank ");
    iserror = 1;
  } else {
    setSuccess(howmanypeople);
    issuccess = 1;
  }

  if (dateandtimevalue === "") {
    setError(dateandtime, " Date and Timee Cannot Be Blank ");
    iserror = 1;
  } else {
    setSuccess(dateandtime);
    issuccess = 1;
  }

  if (yournumberevalue === "") {
    setError(yournumber, " Your Number Cannot Be Blank ");
    iserror = 1;
  } else {
    setSuccess(yournumber);
    issuccess = 1;
  }

  if (messagevalue === "") {
    setError(message, " Message Cannot Be Blank ");
    iserror = 1;
  } else {
    setSuccess(message);
    issuccess = 1;
  }

  console.log("iserror", iserror);
  console.log("issuccess", issuccess);
  if (iserror == 0 && issuccess == 1) {
    console.log("If");
    document.getElementById("thankYou").style.display = "block";
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  //console.log(formControl);
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  formControl.querySelector(".fa-exclamation").style.visibility = "visible";
  formControl.querySelector(".fa-circle-check").style.visibility = "hidden";
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.querySelector(".fa-circle-check").style.visibility = "visible";
  formControl.querySelector(".fa-exclamation").style.visibility = "hidden";
  formControl.className = "form-control success";
}

//nav bar

const hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// end nav bar
