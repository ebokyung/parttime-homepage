function displayMemo() {
  let tableTag = document.getElementById('memo');
  tableTag.innerHTML = '';
  let num = localStorage.length;
  if (num > 3) {
    num = 3;
  }
  for (let i = 0; i < num; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);
    tableTag.innerHTML += `<tr>
    <td><input type="checkbox"> ${val}</td>
  </tr>`
  }
}