const select = document.querySelector("#year-select");
const test = document.querySelector(".test");
let selected;

function creative(year){
   test.appendChild(check_class1(year));
   test.appendChild(check_class2(year));
   test.appendChild(check_class3(year));
}

function check_class1(year) {
    const div = document.createElement("div");

    div.appendChild(creative_h2("'함께형'교양(총 필요 학점: 4)"));
    div.appendChild(creative_checkbox("<신입생 세미나> (필요 이수 학점: 1)"));
    if(year==="18-19"||year=="20") {
        div.appendChild(creative_checkbox("자아의 발견과 진로탐색1,2 (필요 이수 학점: 1)"));
        div.appendChild(creative_checkbox("'자기계발과 사회봉사'영역 (필요 이수 학점: 2)"));
    }else {
        div.appendChild(creative_checkbox("'자기계발과 사회봉사'영역 (필요 이수 학점: 3)"));
    }
    return div;
}

function check_class2(year){
    const div = document.createElement("div");
    const a = document.createElement("div");
    
    a.appendChild(creative_h2((year==="18-19"||year=="20")?"기본교육":"공통교양"));
    
    a.appendChild(creative_checkbox("사고와 표현1 (필요 이수 학점: 2)"));
    a.appendChild(creative_checkbox("사고와 표현2 (필요 이수 학점: 2)"));
    a.appendChild(creative_checkbox(((year==="18-19"||year=="20")?"대학영어":"EAL" )+ "(필요 이수 학점: 2)"));
    a.appendChild(creative_checkbox(((year==="18-19"||year=="20")?"생활영어1,2":"EGC" )+ "(필요 이수 학점: 2)"));

    const b = document.createElement("div");

    b.appendChild(creative_h2((year==="18-19"||year=="20")?"기초교육":"기초교양"));

    if(year==="18-19"||year=="20") {
        a.appendChild(creative_checkbox("'고전 및 외국어'영역 (필요 이수 학점: 3)"));
        a.appendChild(creative_checkbox("'정보이해'영역 (필요 이수 학점: 3)"));
    }else {
        b.appendChild(creative_checkbox("'고전'영역 (필요 이수 학점: 3)"));
        b.appendChild(creative_checkbox("'글로벌'영역 (필요 이수 학점: 3)"));
        b.appendChild(creative_checkbox("'정보(SW.AI)'영역 (필요 이수 학점: 3)"));
    }
    b.appendChild(creative_checkbox("'기초인문사회과학'영역 (필요 이수 학점: (계열별 상이))"));
    b.appendChild(creative_checkbox("'기초자연과학'영역 (필요 이수 학점: (계열별 상이))"));
    
    div.appendChild(a);
    div.appendChild(b);
    return div;
}

function check_class3(year){
    const div = document.createElement("div");
    div.appendChild(creative_h2((year==="18-19"||year=="20")?"핵심교양":"균형교양"));

    div.appendChild(creative_checkbox("'인간과 논리'영역(필요 이수 학점: 3)"));
    div.appendChild(creative_checkbox("'문화과 예술'영역(필요 이수 학점: 3)"));
    div.appendChild(creative_checkbox("'사회와 역사'영역(필요 이수 학점: 3)"));
    div.appendChild(creative_checkbox("'자연과 과학'영역(필요 이수 학점: 3)"));
    
    return div;
}

function creative_checkbox(text) {
    const label = document.createElement("lable");
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
