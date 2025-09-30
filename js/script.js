console.log("js running");
const form = document.getElementById("basic-info-form");
const Hobbies_container = document.querySelector(".Hobbies-container");
const gender_container = document.querySelector(".gender-container");
const Conditions = document.getElementById("Conditions");
const Receive = document.getElementById("Receive");
let SubscribeToNewsletter = document.getElementById("Newsletter");
let array_of_hobbies = [];
let Gender = false;
const gendererror = document.getElementById("gendererror");
const fnameerror = document.getElementById("fname-error");
const hobbieerror = document.getElementById("hobbieerror");
const meassageerror = document.getElementById("meassageerror");
const agreementerror = document.getElementById("agreementerror");
const lnameerror = document.getElementById("lnameerror");
const emailerror = document.getElementById("emailerror");
const phonenumbererror = document.getElementById("phonenumbererror");
const doberror = document.getElementById("doberror");
const obj_of_input = {};
const direct_get = document.getElementsByClassName("direct-get");
const DOB = document.getElementById('DOB')
let date = new Date()
let fullYear = date.getFullYear()
let month = date.getMonth()
let today = date.getDate()

DOB.max = `${fullYear}-${String(month).padStart(2,0)}-${String(today).padStart(2,0)}`

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let final_validation = all_validation();
  if (final_validation) {
    const personal_data = {
      Fname: obj_of_input.Fname,
      Lname: obj_of_input.Lname,
      email: obj_of_input.email,
      DOB: obj_of_input.DOB,
      phoneNumber: obj_of_input.phone_number,
      hobbies: array_of_hobbies,
      gender: Gender,
      Message: obj_of_input.message,
      SubscribeToNewsletter: SubscribeToNewsletter.checked,
      Agreetoerms_and_Conditions: Conditions.checked,
      ReceivePromotionalOffers: Receive.checked,
    };
    console.log(personal_data);
  }
});

function hobbies_finder() {
  let inputs = Hobbies_container.getElementsByTagName("input");
  array_of_hobbies = [];
  Array.from(inputs).forEach((ele) => {
    if (ele.checked == true) {
      array_of_hobbies.push(ele.name);
    }
  });
  if (array_of_hobbies.length == 0) {
    hobbieerror.innerHTML = "please select at list one hobby";
    return false;
  }
  hobbieerror.innerHTML = "";
  return true;
}
function phoneNumberChecker() {
  console.log()
  if (obj_of_input.phone_number.trim().length >= 10 && /^\d+?\d*$/.test(obj_of_input.phone_number)) {
    phonenumbererror.innerHTML = "";
    return true;
  }
  phonenumbererror.innerHTML = "please enter valid phone number";
  return false;
}
function nameChecker() {
  if (obj_of_input.Fname.trim().length == 0) {
    fnameerror.innerHTML = "please fill this field";
    return false;
  } else {
    fnameerror.innerHTML = "";
    return true;
  }
}
function gender_checker() {
  let inputs = gender_container.getElementsByTagName("input");
  Array.from(inputs).forEach((value) => {
    if (value.checked == true) {
      Gender = value.value;
    }
  });
  if (!Gender) {
    gendererror.innerHTML = "please select gender";
    return false;
  }
  gendererror.innerHTML = "";
  return true;
}
function meassage_check() {
  if (obj_of_input.message.trim().length == 0) {
    meassageerror.innerHTML = "please fill this field";
    return false;
  }
  meassageerror.innerHTML = "";
  return true;
}
function Conditions_check() {
  if (Conditions.checked == true) {
    agreementerror.innerHTML = "";
    return true;
  }
  agreementerror.innerHTML = "please agree to agreament and condition";
  return false;
}
function LnameChecker() {
  if (obj_of_input.Lname.trim().length == 0) {
    lnameerror.innerHTML = "please fill this field";
    return false;
  } else {
    lnameerror.innerHTML = "";
    return true;
  }
}
function dob_checker() {
  if (obj_of_input.DOB.trim().length != 0) {
    doberror.innerHTML = "";
    return true;
  }
  doberror.innerHTML = "please enter valid birth date";
  return false;
}
function email_check() {
  if (obj_of_input.email.trim().length == 0) {
    emailerror.innerText = "please fill this field";
    return false;
  }
  emailerror.innerText = "";
  return true;
}
function all_validation() {
  Array.from(direct_get).forEach((ele) => {
    let name = ele.name;
    obj_of_input[ele.name] = ele.value;
  });
  // console.log(obj_of_input)
  dob_checker();
  LnameChecker();
  Conditions_check();
  meassage_check();
  gender_checker();
  nameChecker();
  phoneNumberChecker();
  hobbies_finder();
  email_check();
  if (
    dob_checker() &&
    LnameChecker() &&
    Conditions_check() &&
    meassage_check() &&
    gender_checker() &&
    nameChecker() &&
    phoneNumberChecker() &&
    hobbies_finder() &&
    email_check()
  ) {
    return true;
  }
  return false;
}
