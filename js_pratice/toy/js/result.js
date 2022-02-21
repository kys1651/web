const result = document.querySelector(".result");
const back_btn = document.querySelector("#check_list button");

function paintResult() {
    const major_num = document.querySelector(".major_num");
    if(colleage.value===''){
        alert("단과대학 및 학과를 선택하세요.");
        return;
    }
    if(!major_num.value){
        alert("전공 학점을 입력하세요.");
        return;
    }else{
        back_btn.classList.remove("hidden");
        resultView();
        viewGE();
        viewMajor(major_num.value);

    }   
}

function viewGE(){
    const class1_result = document.querySelector(".class1_result");
    const class1 = document.querySelector(".class1 .class_form");
    const class2a_result = document.querySelector(".class2a_result");
    const class2a = document.querySelector(".class2 .class_form");
    const class2b_result = document.querySelector(".class2b_result");
    const class2b = document.querySelector(".class2 div:nth-child(2) .class_form");
    const class3_result = document.querySelector(".class3_result");
    const class3 = document.querySelector(".class3 .class_form");
    
    GEpaint(class1_result,class1);
    GEpaint(class2a_result,class2a);
    GEpaint(class2b_result,class2b);
    GEpaint(class3_result,class3);
}

function GEpaint(object,item){
    const item_title = document.createElement("h2");
    item_title.innerText = item.parentElement.querySelector("h2").innerText;
    item_title.classList.add("class_title");
    
    object.appendChild(item_title);
    for(var i = 0; i < item.length; i++){
        const div = document.createElement("div");
        div.classList.add("result_div");
        object.appendChild(GEadd(item[i]));
    }
}

function GEadd(object){
    const name = document.createElement("span");
    name.innerText = `${object.parentElement.innerText}             (기준/이수/미이수)     `;
    
    const val = document.createElement("span");
    val.innerText = `${object.value}/`;

    const user = document.createElement("span");
    user.innerText = `0`;

    if(object.checked){
        user.innerText = `${object.value}`;
        if(val.innerText == "계열별 상이/"){
            user.innerText = `이수완료`;
        }
    }else{
        if(val.innerText == "계열별 상이/"){
            user.innerText = `미이수`;
        }
    }
    const div = document.createElement("div");
    div.appendChild(name);
    div.appendChild(val);
    div.appendChild(user);

    if(val.innerText == "계열별 상이/"){
        return div;
    }
    const result = document.createElement("span");
    result.innerText = `/${parseInt(object.value) - parseInt(user.innerText)}`;
    div.appendChild(result);
    if(!object.checked){
        div.classList.add("noClass");
    }
    return div;
}

function viewMajor(num){
    const major = department.options[department.selectedIndex].value;
    const majorText = document.querySelector(".major_result");

    majorText.innerText = `전공학점(기준/이수/미이수) : ${major}/${num}/${major-num}`;
    majorText.classList.add("class_title");
    majorText.classList.add("noClass");
}

function resultHidden() {
    body.classList.remove("hidden");
    result.classList.add("hidden");
    back_btn.classList.add("hidden");
}

function resultView(){
    body.classList.add("hidden");
    result.classList.remove("hidden");
}


back_btn.addEventListener("click",resultHidden);
button.addEventListener("click",paintResult);