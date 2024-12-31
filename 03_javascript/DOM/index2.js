/** 태그 내부 내용 변경 */
// innerText
// textContent
// innerHTML

let div1 = document.getElementById("div1");
console.log(div1);
div1.innerText = "     여기는 <b>첫번째<b> 태그입니다.&hearts;     /";
//두칸 이상의  공백 문자 제거 앞뒤로 공백문자 제거 innerText
console.log(div1.innerText);

//아래는 태그를 그대로 읽음 innerHTML
div1.innerHTML = "여기는 <b>첫번째<b> 태그입니다.&hearts;";
console.log(div1.innerHTML);

div1.textContent = "     여기는 <b>첫번째<b> 태그입니다.&hearts;     /";
//공백 그대로 textContent
console.log(div1.textContent);

// 2. 속성에 접근 ppt 없음
/* 요소 . 속성명 
-getAtttribute() 함수이고 속성값 가져옴
-setAttribute() 속성값 설정 
*/
// pooh, naver 아이디로 가져와야함
let naver = document.getElementById("naver");
console.log(naver);
// naver.setAttribute('속성이름', '바꿔줄 속성값')
naver.setAttribute("href", "http://www.google.com");
console.log(naver.href);
naver.getAttribute(naver.getAttribute("href"));

console.log(document.querySelector("#pooh").src); //문장이지만 # ㅡㅅㄴ다
document.querySelector("#pooh").alt = "푸사진";
//위에는 속성명 alt로 pooh에서 v푸사진으로 변경

//3. css변경
let h1 = document.querySelector("h1"); // 제일 먼저 나온것!
let list = document.querySelectorAll("li"); //모든 li 배열 형태로
// console.log(h1)
// console.log(list)

// 배경색을 분홍 글자는 흰색 글씨 크기 1.3rem

for (let el of list) {
  //아래는 배열이니까 하나하나 바꿔야함 - 사용안되니 카멜케이스로 꼭 "" 문자열로 !
  // el.style.color = "#fff"
  //el.style.backgroundColor ="pink"
  //el.style.fontSize = "1.3rem"
  el.classList.add("friends");
  // 미리 만들어둔 클래스로 미리만들어둔
  //css(이것도 스타일 태그 프렌드 아이디로 만들어둠)로 위에꺼를 한번에 적용
}

h1.classList.add("add-h1"); //미리적어둔 클래스로 css적용
console.log(h1.classList);

//remove , togggle, contains
//h1.classList.remove('add-h1') //삭제
//h1.classList.toggle('add-h1') //있으면 삭제 없으면 클래스 생성해준
console.log(h1.classList.contains("add-h1")); //있으면 트루 없으면 false 존재 조사
console.log(h1.classList.contains("add-h2")); // h2는 없으니까 false
console.log(h1.classList);

// 부모 자식 형제 노드 찾기
let friends = document.getElementById("friends"); //get이니 # 없이!
let tigger = document.querySelector("#tigger");
console.log(friends);

console.log("자식노드 접근---"); //배열 형태로 가져오고
console.log(friends.children);
console.log(friends.children[0]); //자식 접근

console.log("부모노드 접근-----");
console.log(tigger.parentNode); //부모는 하나이기에 배열이 아님!!! 요소 자체를 가져옴

console.log("형제노드 접근------"); //이것도 배열이 아님
console.log("이전형제", tigger.previousElementSibling); //이전형제요소 = 이요르
console.log("다음형제", tigger.nextElementSibling); //다음형제

//노드 생성, 추가, 삭제
let container = document.querySelector(".container");
console.log(container);

//요소 생성 createElement
let p = document.createElement("p"); //p 태그 생성
p.innerText = "새로 추가된 p"; //함수 아니라서 () 아님!!!
p.style.fontWeight = "700";
p.style.background = "red";
p.id = "append-p"; //아이디 추가
//여기까지 생성이고 어디에 추가해야함

// 요소추가
console.log(p);
container.appendChild(p); //선택 요소에 마지막에 추가

let p2 = document.createElement("p");
let p3 = document.createElement("p");

// 각각에 글자요소 추가, 스타일 추가(html문서에 스타일)
p2.innerText = "p2라고";
p3.innerText = "p3라고";
p2.classList.add("p-2"); // css 스타일 추가
p3.classList.add("p-3");
// 나오려면 어디에 추가해야함
//container.append(p2)
//container.appendChild(p3)
container.append(p2, p3, "안녕하세요"); //apend 추천이유 한번에 여러개 가능하고 문자열 추가 가능

//prepend 요소 맨 앞으로 자식요소
//li 태그 만들고 "캉가" friends 클래스 추가
let lii = document.createElement("li");
//추가
lii.innerText = "캉가";
lii.classList.add("friends");
console.log(lii);

friends.prepend(lii);

console.log(h1); //위에서 선택했어서 있는거음
//before
let h3 = document.createElement("h3");
h3.innerText = "h3 tag";
h1.before(h3);
//after
let h2 = document.createElement("h2");
h2.innerText = "h2 tag";
h1.after(h2);

//요소 삭제 remove() removechild()
let firstLi = document.querySelector("li"); //하나만 선택

let ul = firstLi.parentElement;
console.log(ul);

//선택된 요소가 삭제    - 삭제.reomve()
// firstLi.remove()
//
ul.removeChild(firstLi); // 부모요소.removeChild(삭제할 자식 요소) 위랑 같은거 삭제임

//실습 container 안에 div 만들고 안에 이미지랑 span 태그 만듬
let con = document.createElement("div");
container.append(con);
//클래스 추가 이렇게 말고 con.setAttribute("class", "con") 아래처럼
con.classList.add("con");
//이미지 만들고 append
let img1 = document.createElement("img");
con.append(img1);
img1.setAttribute(
  "src",
  "./img/d84248170c2c52303db27306a00fb861f604e7b0e6900f9ac53a43965300eb9a.png"
);
//span 만들고 append
let span = document.createElement("span");
span.innerText = "span ~ ";
con.append(span);

//실습 답은 container 요소 새로 만들고 거기 밑으로 div와 이미지 넣음(div안이 아니라)
