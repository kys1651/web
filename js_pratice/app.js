const h1 = document.querySelector(".title h1");
//title 변수에 문서의 title이라는 id를 가진 Element를 가져 올 수 있게 해준다.

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);