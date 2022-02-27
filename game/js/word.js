const button = document.querySelector("button");
const input = document.querySelector("input");
const wordText = document.querySelector("#word");
const order = document.querySelector("#order");
const list = document.querySelector("#list");

const number = parseInt(prompt("몇명이 참가하나요?",3));
let listNum = 0;
let word; //제시어
let newword; //새로 입력한 단어

if(number){
    const YesOrNo = confirm(number + " Yes Or No?");

    const handleClickButton = function() {
        if((!word||word[word.length-1]=== newword[0]) && newword.length === 3){//첫입력
            
            word = newword;//입력한 단어가 제시어가 됨
            wordText.textContent = word;
            
            let orderNum = parseInt(order.textContent);
            orderNum %= number;
            order.textContent = ++orderNum;
            addList(word);
            
        }else{ //false
            alert("this word is false");
        }
        input.value = '';
        input.focus();
        
    }
    
    const handleInput = function(event) {
        newword = event.target.value;
    }

    function addList(item) {
        list_li = document.createElement("li");
        list_li.textContent = word;
        list.appendChild(list_li);
    }

    button.addEventListener('click',handleClickButton);
    input.addEventListener('input',handleInput);
}

