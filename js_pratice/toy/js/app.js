const select = document.querySelector("#year-select");
const test = document.querySelector(".test");
let selected;
const button = document.createElement("button");
button.innerText = "결과";
button.classList.add("button");

function creative(year){
   test.appendChild(check_class1(year));
   test.appendChild(check_class2(year));
   test.appendChild(check_class3(year));
   test.appendChild(button);
}

function check_class1(year) {
    const div = document.createElement("div");
    div.classList.add("class1");
    div.classList.add("class_title");
    div.appendChild(creative_h2("'함께형'교양 (총 필요 학점: 4)"));
    
    const form = document.createElement("form");
    form.classList.add("class_form");

    form.appendChild(creative_checkbox("<신입생 세미나> (필요 이수 학점: 1)"));
    if(year==="18-19"||year=="20") {
        form.appendChild(creative_checkbox("자아의 발견과 진로탐색1,2 (필요 이수 학점: 1)"));
        form.appendChild(creative_checkbox("'자기계발과 사회봉사'영역 (필요 이수 학점: 2)"));
    }else {
        form.appendChild(creative_checkbox("'자기계발과 사회봉사'영역 (필요 이수 학점: 3)"));
    }
    div.appendChild(form);
    return div;
}

function check_class2(year){
    const div = document.createElement("div");
    div.classList.add("class2");
    div.classList.add("class_title");
    const a = document.createElement("div");
    
    a.appendChild(creative_h2((year==="18-19"||year=="20")?"기본교육 (필요 이수 학점: 14)":"공통교양(필요 이수 학점: 8)"));
    
    const form_a = document.createElement("form");
    form_a.classList.add("class_form");

    form_a.appendChild(creative_checkbox("사고와 표현1 (필요 이수 학점: 2)"));
    form_a.appendChild(creative_checkbox("사고와 표현2 (필요 이수 학점: 2)"));
    form_a.appendChild(creative_checkbox(((year==="18-19"||year=="20")?"대학영어":"EAL" )+ "(필요 이수 학점: 2)"));
    form_a.appendChild(creative_checkbox(((year==="18-19"||year=="20")?"생활영어1,2":"EGC" )+ "(필요 이수 학점: 2)"));

    const b = document.createElement("div");
    const form_b = document.createElement("form");
    form_b.classList.add("class_form");

    b.appendChild(creative_h2((year==="18-19"||year=="20")?"기초교육 (계열별로 상이)":"기초교양 (계열별로 상이)"));

    if(year==="18-19"||year=="20") {
        form_a.appendChild(creative_checkbox("'고전 및 외국어'영역 (필요 이수 학점: 3)"));
        form_a.appendChild(creative_checkbox("'정보이해'영역 (필요 이수 학점: 3)"));
    }else {
        form_b.appendChild(creative_checkbox("'고전'영역 (필요 이수 학점: 3)"));
        form_b.appendChild(creative_checkbox("'글로벌'영역 (필요 이수 학점: 3)"));
        form_b.appendChild(creative_checkbox("'정보(SW.AI)'영역 (필요 이수 학점: 3)"));
    }
    form_b.appendChild(creative_checkbox("'기초인문사회과학'영역 (필요 이수 학점: (계열별 상이))"));
    form_b.appendChild(creative_checkbox("'기초자연과학'영역 (필요 이수 학점: (계열별 상이))"));
    
    a.appendChild(form_a);
    b.appendChild(form_b);

    div.appendChild(a);
    div.appendChild(b);
    return div;
}

function check_class3(year){
    const div = document.createElement("div");
    div.classList.add("class3");
    div.classList.add("class_title");

    div.appendChild(creative_h2(((year==="18-19"||year=="20")?"핵심교양":"균형교양")+" (필요 이수 학점: 12학점)"));

    const form = document.createElement("form");
    form.classList.add("class_form");

    form.appendChild(creative_checkbox("'인간과 논리'영역(필요 이수 학점: 3)"));
    form.appendChild(creative_checkbox("'문화과 예술'영역(필요 이수 학점: 3)"));
    form.appendChild(creative_checkbox("'사회와 역사'영역(필요 이수 학점: 3)"));
    form.appendChild(creative_checkbox("'자연과 과학'영역(필요 이수 학점: 3)"));
    
    div.appendChild(form);
    return div;
}

function creative_checkbox(text) {
    const label = document.createElement("label");
    label.innerText = text;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.value = text;
    label.appendChild(check);
    return label;
}

function creative_h2(text){
    const h2 = document.createElement("h2");
    h2.innerText = text;
    return h2;
}

function changeSelect() {
    selected = select.options[select.selectedIndex].value;
    removeAllChild(test);
    creative(selected);
}
function removeAllChild(item) {
    while(item.hasChildNodes()){
        item.removeChild(item.firstChild);
    }
}

select.addEventListener("change",changeSelect);
