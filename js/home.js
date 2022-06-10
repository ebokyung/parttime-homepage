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
  </tr><hr>`
  }
}


let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let videoContainer = document.querySelector('#video__container');
let videoArticles = document.querySelectorAll("#video__container article");

const size = videoArticles[0].clientWidth;
let length = videoArticles.length;
let cnt = 1;

prevBtn.addEventListener("click", function () {
  if (cnt <= 1) {
    cnt = 0;
  } else {
    cnt--;
  }
  videoContainer.style.transform = "translateX(" + (-size * cnt) + "px)"
});
nextBtn.addEventListener("click", function () {
  videoContainer.style.transform = "translateX(" + (-size * cnt) + "px)"
  if (cnt >= length - 1) {
    cnt = length - 1;
  } else {
    cnt++;
  }
});