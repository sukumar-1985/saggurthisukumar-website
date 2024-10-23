const btns = document.querySelectorAll("button");
let input = document.querySelector(".input");

let string = "";

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML === "1") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "2") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "3") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "4") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "5") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "6") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "7") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "8") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "9") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "0") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "00") {
      string += e.target.innerHTML;
      input.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (e.target.innerHTML === ".") {
      let dot = ".";
      string += dot;
      input.value = string;
    } else if (e.target.innerHTML === "+") {
      string += "+";
      input.value = string;
    } else if (e.target.innerHTML === "-") {
      string += "-";
      input.value = string;
    } else if (e.target.innerHTML === "*") {
      string += "*";
      input.value = string;
    } else if (e.target.innerHTML === "/") {
      string += "/";
      input.value = string;
    } else if (e.target.innerHTML === "%") {
      string += "%";
      input.value = string;
    } else if (e.target.innerHTML === "=") {
      input.value = eval(string);
    }
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    string += e.key;
    input.value = string;
  } else if (e.key === "2") {
    string += e.key;
    input.value = string;
  } else if (e.key === "3") {
    string += e.key;
    input.value = string;
  } else if (e.key === "4") {
    string += e.key;
    input.value = string;
  } else if (e.key === "5") {
    string += e.key;
    input.value = string;
  } else if (e.key === "6") {
    string += e.key;
    input.value = string;
  } else if (e.key === "7") {
    string += e.key;
    input.value = string;
  } else if (e.key === "8") {
    string += e.key;
    input.value = string;
  } else if (e.key === "9") {
    string += e.key;
    input.value = string;
  } else if (e.key === "0") {
    string += e.key;
    input.value = string;
  } else if (e.key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string;
  } else if (e.key === ".") {
    let dot = ".";
    string += dot;
    input.value = string;
  } else if (e.key === "+") {
    string += "+";
    input.value = string;
  } else if (e.key === "-") {
    string += "-";
    input.value = string;
  } else if (e.key === "*") {
    string += "*";
    input.value = string;
  } else if (e.key === "/") {
    string += "/";
    input.value = string;
  } else if (e.key === "%") {
    string += "%";
    input.value = string;
  } else if (e.key === "=" || e.key === "Enter") {
    input.value = eval(string);
  }
});
