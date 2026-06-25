function greeting() {
  let i = document.querySelector('input[name="left"]');
  let o = document.querySelector('input[name="right"]');
  let n = Number(i.value);
  let d = Number(o.value);
  let k = document.querySelector('#answer');
  k.textContent = n + d;
}
let v = document.querySelector('#calc');
v.addEventListener('click', greeting);