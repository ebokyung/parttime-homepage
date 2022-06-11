function openQuizPopup() {
  window.open("quiz_popup.html", "quiz_add", "width=400, height=200, left=500, top=100");
}
function openMemoPopup() {
  window.open("memo_popup.html", "memo_add", "width=400, height=200, left=500, top=100");
}

function displayList() {
  let tableTag = document.getElementById('tbody__tag');
  tableTag.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);
    tableTag.innerHTML += `<tr>
    <td><input type="checkbox">   ${val}</td>
  </tr>`
  }
}

function appendQuiz(q, a) {
  let divTag = document.getElementById("quiz__container");

  let div = document.createElement('div');

  let p1 = document.createElement('p');
  p1.innerHTML = 'Q. ' + q;
  div.appendChild(p1);

  let btn = document.createElement('button');
  btn.setAttribute('onclick', 'toggle(this)');
  btn.innerHTML = '답보기';
  div.appendChild(btn);

  let p2 = document.createElement('p');
  p2.setAttribute('style', 'display:none');
  p2.innerHTML = a;
  div.appendChild(p2);

  console.log(div);

  divTag.appendChild(div);

  let hr = document.createElement('hr');
  divTag.appendChild(hr);
}

function toggle(obj) {
  let answer = obj.nextElementSibling;
  if (answer.style.display !== 'none') {
    answer.style.display = 'none';
  }
  else {
    answer.style.display = 'block';
  }
}