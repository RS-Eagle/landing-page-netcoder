let btn1 = document.querySelector(".slot-btn1");
let btn2 = document.querySelector(".slot-btn2");
let btn = document.querySelector(".join-btn");
let xbtn = document.querySelector(".x");
let form = document.querySelector(".main-form-z");
let buttons = document.querySelectorAll(".row-edit button");
var newbtn;
var slot;
let user_Choices = document.querySelectorAll(".card-title");
let option = document.querySelectorAll("option");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    newbtn = document.querySelectorAll(".row-edit button");
    // console.log(newbtn);
    filterbtn(newbtn);
  });
});



user_Choices.forEach((e) => {
  e.addEventListener("click", () => {
    window.scrollTo(0, 0);
    form.style.display = "block";
    option.forEach((k) => {
      if (k.innerHTML == e.textContent) {
        console.log(k.textContent);
        k.setAttribute("selected", "selected");
      }
    });
  });
});

const filterbtn = (newbtn) => {
  newbtn.forEach((e) => {
    if (e.classList.contains("active")) {
      // console.log(slotpre);
    } else {
      slotpre = e.textContent;
    }
  });
  slot = slotpre;
};

let sub = document.querySelector(".btn-sub");

btn.addEventListener("click", () => {
  form.style.display = "block";
});

xbtn.addEventListener("click", () => {
  form.style.display = "none";
});
btn1.addEventListener("click", () => {
  if (btn1.classList.contains("active")) {
    btn1.classList.remove("active");
    btn2.classList.add("active");
  } else {
    btn1.classList.add("active");
    btn2.classList.remove("active");
  }
});

btn2.addEventListener("click", () => {
  if (btn2.classList.contains("active")) {
    btn2.classList.add("active");
    btn2.classList.remove("active");
  } else {
    btn2.classList.add("active");
    btn1.classList.remove("active");
  }
});
let email = document.querySelector("#email");

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }

  return false;
}

const submit = () => {
  sub.innerHTML = "Submiting..";
  if (ValidateEmail()) {
    let option = document.querySelector("#courses").value;
    let date = document.querySelector("#date");
    let namee = document.querySelector("#name");
    let phone = document.querySelector("#phone");
    let address = document.querySelector("#address");

    var datee = date.value;
    var nameee = namee.value;
    var phonee = phone.value;

    var emaill = email.value;
    var addresss = address.value;

    let boddy = `name = ${nameee} , phone = ${phonee}, course = ${option}, email = ${emaill}, address = ${addresss}, slot = ${slot} , date = ${datee} `;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lifesaving1026@gmail.com",
      Password: "AF26C5C88D804942876AB631973D9E65601B",
      To: "lifesaving1026@gmail.com",
      From: "lifesaving1026@gmail.com",
      Subject: "Contact Form",
      Body: boddy,
    }).then(() => {
      sub.innerHTML = "Submited Successfully";
      setTimeout(() => {
        date.value = "";
        namee.value = "";
        phone.value = "";
        email.value = "";
        address.value = "";
        sub.innerHTML = "Submit Your Details";
        form.style.display = "none";
      }, 1000);
    });
  } else {
    sub.innerHTML = "Wrong Email";
    setTimeout(() => {
      sub.innerHTML = "Submit Your Details";
    }, 2000);
  }
};
var typewriting_class = document.querySelector(".typewriter");
const lines = [
  "On Full Stack Development...",
  "On Graphics & Web...",
  "On Advance Diploma",
  "In AutoCad With",
  "2D,3d Animation...",
  "On UI/UX...",
  "On Film Making And",
  "Video Editing...",
  "Digital Marketing...",
  "Ethical Hacking..."
];

let i = -1;
let index = 1;
let line;
let again = true;
let writing_speed = 50;
let last_word_pause = 2000;
let word_wait = 1000;
let initial_start = 2000;



function line_decider() {
  i++;

  // console.log("hii");

  line = lines[i];
  writing(line);
}

const dec = (line) => {
  let updatedline = line.slice(0, index);
  typewriting_class.innerHTML = updatedline;
  setTimeout(() => {
    if (i + 1 == lines.length && index == line.length && again) {
      setTimeout(() => {
        // console.log("hii");
        // index = 1;
        again = false;

        dec(line);
      }, last_word_pause);
    } else if (i + 1 == lines.length && index == 1 && !again) {
      i = -1;
      index = 1;
      // console.log("Helloo HIII");
      line_decider();
    } else if (index == 1) {
      index = 1;

      line_decider();
    } else {
      // console.log("hii");
      index--;
      dec(line);
    }
  }, writing_speed);
};

function writing(line) {
  // console.log(index);
  let updatedline = line.slice(0, index);
  typewriting_class.innerHTML = updatedline;
  setTimeout(() => {
    if (index > line.length) {
      setTimeout(() => {
        // index = 1;
        dec(line);
      }, word_wait);
    } else {
      index++;
      writing(line);
    }
  }, writing_speed);
}

let start_text = typewriting_class.innerHTML;
console.log(start_text);
let initial_start_index = 18;

const dec_start = (line) => {
  let updatedline1 = line.slice(0, initial_start_index);
  typewriting_class.innerHTML = updatedline1;
  if (initial_start_index == 1) {
    line_decider();
  } else {
    setTimeout(() => {
      initial_start_index--;
      dec_start(start_text);
    }, writing_speed);
  }
};

setTimeout(() => {
  dec_start(start_text);
}, initial_start);

let bli = false;

setInterval(() => {
  if (bli) {
    typewriting_class.classList.add("blink");
    bli = false;
  } else {
    typewriting_class.classList.remove("blink");
    bli = true;
  }
}, 500);
sub.addEventListener("click", submit);
