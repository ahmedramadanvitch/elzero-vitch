// change color in all page
// local storage
let mainColor = localStorage.getItem("color_option");
// check if there is color option
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color-alt", mainColor);
  document.documentElement.style.setProperty("--main-color", mainColor);
}

let colorLi = document.querySelectorAll(".switcher li");
// do loop on < li >
colorLi.forEach((ele) => {
  // click on every li
  ele.addEventListener("click", function (even) {
    // this is very important code for me
    // set colors in root ( in css )
    document.documentElement.style.setProperty( "--main-color-alt" , ele.dataset.color );
    document.documentElement.style.setProperty("--main-color",ele.dataset.color);
    // set color in local storage
    localStorage.setItem("color_option", ele.dataset.color);

    even.target.parentElement
      .querySelectorAll(".switcher .active")
      .forEach((element) => {
        element.classList.remove("active");
      });

    even.target.classList.add("active");

    // localStorage.setItem("class_active",even.target.classList.add("active"));
  });
});

// ***************************************************************** //

// right button in window
let btn = document.querySelector(".btn-up");

// our-skills section
let sectionSkills = document.querySelector(".skill");
let spanSkill = document.querySelectorAll(".skill span");

// awesome section
let sectionAwesome = document.querySelector(".awesome");
let spanAwesomeNum = document.querySelectorAll(".number-span");
let started = false;

window.onscroll = function () {
  // scroll progress span
  if (window.scrollY >= sectionSkills.offsetTop) {
    spanSkill.forEach(function (ele) {
      ele.style.width = ele.dataset.width;
    });
  }
  // scroll stats numbers increase number in section awesome stats
  if (window.scrollY >= sectionAwesome.offsetTop - 300) {
    if (!started) {
      spanAwesomeNum.forEach((awe) => startCountNumber(awe));
    }
    started = true;
  }

  // scroll button right of page

  if (window.scrollY >= 300) {
    btn.style.cssText = "display: block; opacity: .9;";
  } else {
    btn.style.cssText = "display: block; right: -70px";
  }
};
// function increase number in section awesome
function startCountNumber(element) {
  let goal = element.dataset.goal;
  let counterNumber = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(counterNumber);
    }
  }, 1000 / goal);
}
// function of button up in window
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// count Down Timer in latest-Events section
let countDownDate = new Date("Dec 31 2027 23:59:59").getTime();

let counter = setInterval(() => {
  // to get date of this day now
  let dateNow = new Date().getTime();
  // to get difference between now and end of the year(Dec 31 2022 23:59:59)
  let dateDiff = countDownDate - dateNow; // 16728839818903 by mill secondes

  // days
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  // hours
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  // minutes
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  // secondes
  let secondes = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".secondes").innerHTML = secondes < 10 ? `0${secondes}` : secondes;
  // condition if dateDiff = 0 finish the function ( set Interval)
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

// progress under inputs in request discount section
//input text in form in request discount section
let inputText = document.querySelector(".input-text");
let progressText = document.querySelector(".progress-text");
let maxLengthText = inputText.getAttribute("maxlength");

inputText.oninput = function () {
  progressText.style.width = `${
    (inputText.value.length * 100) / maxLengthText
  }%`;
  if (inputText.value.length <= 10) {
    progressText.style.backgroundColor = "green";
  } else if (inputText.value.length <= 20) {
    progressText.style.backgroundColor = "#15809b";
  } else {
    progressText.style.backgroundColor = "#1787e0";
  }
};
//input Email in form in request discount section
let inputEmail = document.querySelector(".input-email");
let inputSend = document.querySelector(".send");
let progressEmail = document.querySelector(".progress-email");
let maxLengthEmail = inputEmail.getAttribute("maxlength");

inputEmail.oninput = function () {
  progressEmail.style.width = `${(this.value.length * 100) / maxLengthEmail}%`;
  if (this.value.length <= 10) {
    progressEmail.style.backgroundColor = "green";
  } else if (inputText.value.length <= 20) {
    progressEmail.style.backgroundColor = "#15809b";
  } else {
    progressEmail.style.backgroundColor = "#1787e0";
  }
};
//input phone number in form in request discount section
let inputPhone = document.querySelector(".input-phone");
let progressPhone = document.querySelector(".progress-phone");
let maxLengthPhone = inputPhone.getAttribute("maxlength");

inputPhone.oninput = function () {
  progressPhone.style.width = `${(this.value.length * 100) / maxLengthPhone}%`;
  if (this.value.length <= 5) {
    progressPhone.style.backgroundColor = "green";
  } else if (inputText.value.length <= 10) {
    progressPhone.style.backgroundColor = "#15809b";
  } else {
    progressPhone.style.backgroundColor = "#1787e0";
  }
};
