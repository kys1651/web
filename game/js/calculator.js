  let numOne = '';
  let operator = '';
  let numTwo = '';
  let minusNum = false;

  const operatorText = document.querySelector('#operator');
  const resultText = document.querySelector('#result');

  const onClickNum = (event) => {
    const num = event.target.textContent;
      if(!operator) {// operator이 비었을 때
        if(minusNum){
          numOne = '-';
          minusNum = false;
        }
        numOne += num;
        resultText.value += num;
        return;
      }
      
      //비어있지 않을 때
      if(!numTwo){
        resultText.value = '';
      }
      numTwo += num;
      resultText.value += num;
      
    };

  document.querySelector('#num-0').addEventListener('click', onClickNum);
  document.querySelector('#num-1').addEventListener('click', onClickNum);
  document.querySelector('#num-2').addEventListener('click', onClickNum);
  document.querySelector('#num-3').addEventListener('click', onClickNum);
  document.querySelector('#num-4').addEventListener('click', onClickNum);
  document.querySelector('#num-5').addEventListener('click', onClickNum);
  document.querySelector('#num-6').addEventListener('click', onClickNum);
  document.querySelector('#num-7').addEventListener('click', onClickNum);
  document.querySelector('#num-8').addEventListener('click', onClickNum);
  document.querySelector('#num-9').addEventListener('click', onClickNum);

  const onClickOperator = function(event) {
    const opr =event.target.textContent;

    if(numTwo){//연달아서 계산
      numOne = parseInt(numOne);
      numTwo = parseInt(numTwo);

      switch(operator){
        case '+':
          resultText.value = numOne + numTwo;
          break;
        case '-':
          resultText.value = numOne - numTwo;
          break;
        case '/':
          resultText.value = numOne / numTwo;
          break;
        case 'x':
          resultText.value = numOne * numTwo;
          break;
        default:
          break;
      }
      numOne = resultText.value;
      numTwo = '';
    }

    if(numOne){//첫번째 숫자만 입력
      operator = opr;
      operatorText.value = opr;
      return;
    }

    if(opr==='-'){//첫번째 수가 음수 일 때
      minusNum = true;
      operatorText.value = opr;
    }else{
      alert("숫자를 먼저 입력하세요");
    }
  }
  document.querySelector('#plus').addEventListener('click', onClickOperator);
  document.querySelector('#minus').addEventListener('click', onClickOperator);
  document.querySelector('#divide').addEventListener('click', onClickOperator);
  document.querySelector('#multiply').addEventListener('click', onClickOperator);

  document.querySelector('#calculate').addEventListener('click', () => {
    if(numTwo){
      numOne = parseInt(numOne);
      numTwo = parseInt(numTwo);

      switch(operator){
        case '+':
          resultText.value = numOne + numTwo;
          break;
        case '-':
          resultText.value = numOne - numTwo;
          break;
        case '/':
          resultText.value = numOne / numTwo;
          break;
        case 'x':
          resultText.value = numOne * numTwo;
          break;
        default:
          break;
      }
      numOne = resultText.value;
      numTwo = '';
      operatorText.value = '';
      operator = '';
    }else{
      alert("숫자를 입력하세요");
    }
  });
  document.querySelector('#clear').addEventListener('click', () => {
    numOne='';
    numTwo='';
    operator='';
    operatorText.value = '';
    resultText.value = '';
  });