const q1 = document.getElementById("q1");

q1.addEventListener("click", () => {
  alert("Use alert()");
});

const q2 = document.getElementById("q2");

q2.addEventListener("click", () => {
  const a = parseFloat(prompt("Use prompt()\nEnter number"));
  alert(a ** 2);
});

const q3 = document.getElementById("q3");

q3.addEventListener("click", () => {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const q3answer = document.getElementById("q3answer");

  q3answer.innerHTML = ` S = ${a * b} `;
});

document.getElementById("4a-btn").addEventListener("click", () => {
  const a = document.getElementById("4a-a").value;
  const chuvihv = document.getElementById("chuvihv");
  const dientichhv = document.getElementById("dientichhv");
  chuvihv.innerHTML = `Chu vi hinh vuong: ${4 * a}`;
  dientichhv.innerHTML = `Dien tich hinh vuong: ${a ** 2}`;
});

document.getElementById("4b-btn").addEventListener("click", () => {
  const a = document.getElementById("4b-a").value;
  const b = document.getElementById("4b-b").value;
  const c = document.getElementById("a^2");
  const d = document.getElementById("a^b");
  c.innerHTML = `a^2 = ${a ** 2}`;
  d.innerHTML = `a^b = ${a ** b}`;
});

document.getElementById("4c-btn").addEventListener("click", () => {
  const a = parseInt(document.getElementById("4c-a").value);
  const b = parseInt(document.getElementById("4c-b").value);
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  const answer = document.getElementById("4c-answer");
  answer.innerHTML = sum;
});

document.getElementById("4d-btn").addEventListener("click", () => {
  const year = parseInt(document.getElementById("4d-year").value);
  const century = document.getElementById("century");
  console.log(year);
  century.innerHTML = Math.ceil(year / 100);
});

document.getElementById("4e-btn").addEventListener("click", () => {
  const a = parseInt(document.getElementById("4e-a").value);
  const b = parseInt(document.getElementById("4e-b").value);
  const c = parseInt(document.getElementById("4e-c").value);
  const tg = document.getElementById("tg");
  const tgc = document.getElementById("tgc");
  const tgd = document.getElementById("tgd");
  const tgv = document.getElementById("tgv");
  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    tg.classList.add("checked");
    if (a === b || a === c || a === b) {
      tgc.classList.add("checked");
    } else tgc.classList.remove('checked')
    if (a === b && a === c) {
      tgd.classList.add("checked");
    } else tgd.classList.remove('checked')
    if (
      a ** 2 + b ** 2 === c ** 2 ||
      b ** 2 + c ** 2 === a ** 2 ||
      a ** 2 + c ** 2 === b ** 2
    ) {
      tgv.classList.add("checked");
    } else tgv.classList.remove('checked')
  } else tg.classList.remove('checked')
});
