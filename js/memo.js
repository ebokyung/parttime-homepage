function addQuiz() {
  window.open("quiz_popup.html", "quiz_add", "width=400, height=200, left=200, top=100");
}
function addMemo() {
  window.open("memo_popup.html", "memo_add", "width=400, height=200, left=200, top=100");
}

function displayList() {
  let tableTag = document.getElementById('tbody__tag');
  tableTag.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);
    // console.log(key + ' : ' + val);
    tableTag.innerHTML += `<tr>
    <td><input type="checkbox"> ${val}</td>
  </tr>`
  }
}

