const input = document.querySelector('#input');
const form = document.querySelector('#form');
const logs = document.querySelector('#logs');
let out = 0;
const numbers = [];
for(let n = 1; n < 10; n++){
    numbers.push(n);
}
const answer = [];
for(let n = 0 ; n < 4; n++){
    const index = Math.floor(Math.random() * (numbers.length));
    answer.push(numbers[index]);
    numbers.splice(index,1);
}
console.log(answer);

const tries =[];
function checkInput(input) {//input form check
  if(input.length !== 4){
    return alert("4자리를 입력 해주세요.");
  }
  if(new Set(input).size !== 4){
    return alert("중복되지 않은 숫자를 입력해주세요.");
  }
  if(tries.includes(input)){
    return alert("이미 시도한 값입니다.");
  }
  return true;
}

form.addEventListener("submit",function (event){
    event.preventDefault();
    const value = input.value;
    input.value = '';

    function defeated() {
      const message = document.createTextNode(`패배! 정답은${answer.join('')}`);
      logs.appendChild(message);
    }
    
    if(!checkInput(value)){//check function
      return;
    }

    if(answer.join('')===value){
      logs.textContent = "홈런!";
      return;
    }
    if(tries.length >= 9){
      defeated();
      return;
    }
    //몇 스트라이크 몇 볼 검사
    let ball = 0;
    let strike = 0;
    for(let i = 0 ; i < answer.length; i++){
      const index = value.indexOf(answer[i]);
      if(index > -1){//숫자 일치
        if(index === i){//자릿수 같음
          strike++;
        }else{
          ball++;
        }
      }
    }
    if(ball === 0 && strike === 0){
      logs.append(`${out}아웃`,document.createElement('br'));
      out++;
    }else{
      logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    }
    if( out === 3){
      
      return;
    }
    tries.push(value);
})