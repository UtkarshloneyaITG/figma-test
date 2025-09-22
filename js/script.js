console.log("js running");

const form = document.getElementById("basic-info-form");
const Hobbies_container = document.querySelector(".Hobbies-container");
const phone_number = document.getElementById("phone-number");
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const email = document.getElementById("Email-Address");
const DOB = document.getElementById("DOB");
const gender_container = document.querySelector(".gender-container");
const Message = document.getElementById("message");
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
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let final_validation = all_validation();
  if (final_validation) {
    const personal_data = {
      Fname: Fname.value,
      Lname: Lname.value,
      email: email.value,
      DOB: DOB.value,
      phoneNumber: phone_number.value,
      hobbies: array_of_hobbies,
      gender: Gender,
      Message: Message.value,
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
  console.log(array_of_hobbies.length);
  if (array_of_hobbies.length == 0) {
    hobbieerror.innerHTML = "please select at list one hobby";
    return false;
  }
  hobbieerror.innerHTML = "";
  return true;
}
function phoneNumberChecker() {
  if (phone_number.value.length >= 10) {
    phonenumbererror.innerHTML = "";
    return true;
  }
  phonenumbererror.innerHTML = "please enter valid phone number";
  return false;
}

function nameChecker() {
  if (Fname.value.trim().length == 0) {
    fnameerror.innerHTML = "please fill this field";
    return false;
  }
  if (
    (Fname.value[0] >= "a" && Fname.value[0] <= "z") ||
    (Fname.value[0] >= "A" && Fname.value[0] <= "Z")
  ) {
    fnameerror.innerHTML = "";
    return true;
  }
  fnameerror.innerHTML = "please enter vaild name";
  return false;
}
function gender_checker() {
  let inputs = gender_container.getElementsByTagName("input");
  Array.from(inputs).forEach((value) => {
    if (value.checked == true) {
      Gender = value.name;
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
  if (Message.value.trim().length == 0) {
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
  if (Lname.value.trim().length == 0) {
    lnameerror.innerHTML = "please fill this field";
    return false;
  }
  if (
    (Lname.value[0] >= "a" && Lname.value[0] <= "z") ||
    (Lname.value[0] >= "A" && Lname.value[0] <= "Z")
  ) {
    lnameerror.innerHTML = "";
    return true;
  }
  lnameerror.innerHTML = "please enter vaild name";
  return false;
}
function dob_checker() {
  if (DOB.value.trim().length != 0) {
    doberror.innerHTML = "";
    return true;
  }
  doberror.innerHTML = "please enter valid birth date";
  return false;
}
function email_check() {
  if (email.value.trim().length == 0) {
    emailerror.innerText = "please fill this field";
    return false;
  }
  emailerror.innerText = "";
  return true;
}
function all_validation() {
  dob_checker();
  LnameChecker();
  Conditions_check();
  meassage_check();
  gender_checker();
  nameChecker();
  phoneNumberChecker();
  hobbies_finder();
  email_check()
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
