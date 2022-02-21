const select = document.querySelector("#year-select");
const colleage = document.querySelector("#colleage-select");
const body = document.querySelector(".body");
const department = document.querySelector("#department-select");
const button = document.createElement("button");

let selected;
button.innerText = "결과";
button.classList.add("button");

function departmentlist() {
    removeAllChild(department);
    const col = colleage.value;

    if(col==="IT") {
        department.add(creative_option("컴퓨터공학과",84));
        department.add(creative_option("전자공학부",84));
        department.add(creative_option("임베디드보안",84));
        department.add(creative_option("정보통신(공학교육비인증)",70));
    }
}

function creative(year){
   body.appendChild(check_class1(year));
   body.appendChild(check_class2(year));
   body.appendChild(check_class3(year));
   body.appendChild(check_class4());
   body.appendChild(button);
}

function check_class1(year) {
    const div = document.createElement("div");
    div.classList.add("class1");

    const h2 = creative_h2("'함께형'교양 ",4);
    h2.classList.add("class_title");
    div.appendChild(h2);
    
    const form = document.createElement("form");
    form.classList.add("class_form");

    form.appendChild(creative_checkbox("<신입생 세미나> ",1));
    if(year==="18-19"||year=="20") {
        form.appendChild(creative_checkbox("자아의 발견과 진로탐색1,2 ",1));
        form.appendChild(creative_checkbox("'자기계발과 사회봉사'영역 ",2));
    }else {
        form.appendChild(creative_checkbox("'자기계발과 사회봉사'영역 ",3));
    }
    div.appendChild(form);
    return div;
}

function check_class2(year){
    const div = document.createElement("div");
    div.classList.add("class2");

    const a = document.createElement("div");

    const h2_a = creative_h2("기초교양/기본교육",(year==="18-19"||year=="20")?14:8);
    h2_a.classList.add("class_title");
    a.appendChild(h2_a);
    
    const form_a = document.createElement("form");
    form_a.classList.add("class_form");

    form_a.appendChild(creative_checkbox("사고와 표현1 ",2));
    form_a.appendChild(creative_checkbox("사고와 표현2 ",2));
    form_a.appendChild(creative_checkbox(((year==="18-19"||year=="20")?"대학영어 ":"EAL" ),2));
    form_a.appendChild(creative_checkbox(((year==="18-19"||year=="20")?"생활영어1,2 ":"EGC" ),2));

    const b = document.createElement("div");
    const form_b = document.createElement("form");
    form_b.classList.add("class_form");

    const h2_b = creative_h2("기초교육/기초교양 ","계열별 상이");
    h2_b.classList.add("class_title");
    b.appendChild(h2_b);
    
    if(year==="18-19"||year=="20") {
        form_a.appendChild(creative_checkbox("'고전 및 외국어'영역 ",3));
        form_a.appendChild(creative_checkbox("'정보이해'영역 ",3));
    }else {
        form_b.appendChild(creative_checkbox("'고전'영역 ",3));
        form_b.appendChild(creative_checkbox("'글로벌'영역 ",3));
        form_b.appendChild(creative_checkbox("'정보(SW.AI)'영역 ",3));
    }
    form_b.appendChild(creative_checkbox("'기초인문사회과학'영역 ","계열별 상이"));
    form_b.appendChild(creative_checkbox("'기초자연과학'영역 ","계열별 상이"));
    
    a.appendChild(form_a);
    b.appendChild(form_b);

    div.appendChild(a);
    div.appendChild(b);
    return div;
}

function check_class3(year){
    const div = document.createElement("div");
    div.classList.add("class3");

    const h2 = creative_h2(((year==="18-19"||year=="20")?"핵심교양 ":"균형교양 "),12);
    h2.classList.add("class_title");
    div.appendChild(h2);

    const form = document.createElement("form");
    form.classList.add("class_form");

    form.appendChild(creative_checkbox("'인간과 논리'영역",3));
    form.appendChild(creative_checkbox("'문화과 예술'영역",3));
    form.appendChild(creative_checkbox("'사회와 역사'영역",3));
    form.appendChild(creative_checkbox("'자연과 과학'영역",3));
    
    div.appendChild(form);
    return div;
}

function check_class4(){
    const div = document.createElement("div");
    div.classList.add("major");
    
    const h2 = creative_h2("이수한 전공 학점",0);
    h2.classList.add("class_title");
    
    const num = document.createElement("input");
    num.classList.add("major_num");
    num.type = "number";
    num.value = "";
    h2.appendChild(num);
    div.appendChild(h2);
    return div;
}

function creative_checkbox(text,num) {
    const label = document.createElement("label");
    label.innerText = `${text}(필요 이수 학점: ${num})`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.value = num;
    label.appendChild(check);
    return label;
}

function creative_h2(text,num){
    const h2 = document.createElement("h2");
    if(num!==0){
       h2.innerText = `${text}(필요 이수 학점: ${num})`;
       h2.value = num;
    }else{
        h2.innerText = text;
    }
    return h2;
}

function creative_option(text,num){
    const option = document.createElement("option");
    option.value = num;
    option.innerText = text;
    return option;
}

function changeSelect() {
    selected = select.options[select.selectedIndex].value;
    removeAllChild(body);
    creative(selected);
}

function removeAllChild(item) {
    while(item.hasChildNodes()){
        item.removeChild(item.firstChild);
    }
}

select.addEventListener("change",changeSelect);
colleage.addEventListener("change",departmentlist);

