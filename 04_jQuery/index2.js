// input value 설정 및 가져오기

function getValue() {
  let value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("다른 글자로 설정!");
}
function changeCssJS() {
  let span = document.querySelector("span");
  span.style = "font-size:20px; color:red;";
}

function changeCssJQ() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

// attr()
function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}
function changeAttrJQ() {
  $("a").attr("href", "https://www.daum.net");
}

// text
function changeTextJS() {
  let p = document.querySelector(".p-text");
  p.innerText = "js로 바꿈";
}
function changeTextJQ() {
  $(".p-text").text("JQ로 바꿈");
}

function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "<em>javascript</em>";
}
function changeHtmlJQ() {
  $(".p-html").html("<h2>JQuery</h2>");
}

function appendJS() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막 자식으로 추가된 li(js)";

  ul.append(li);
}
function appendJQ() {
  $(".colors").append("<li>마지막 자식으로 추가된 li JQ</li>");
  // 위에는 태그로 만들어진다!!!
}

// prepend()
function prependJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "green 앞에 만들어진 li JS";
  green.prepend(li);
}
function prependJQ() {
  $(".green").prepend("<li>green 앞에 추가 된 자식 JQ</li>");
}

// after()
function afterJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "green 뒤에 만들어진 li JS";
  green.after(li);
}
function afterJQ() {
  $(".green").after("<li>green 뒤에 추가 된 자식 JQ</li>");
}

// before()
function beforeJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "green before 만들어진 li JS";
  green.before(li);
}
function beforeJQ() {
  $(".green").before("<li>green before 추가 된 자식 JQ</li>");
}

// remove / empty

function removeJS() {
  let li2 = document.querySelector(".li2");
  li2.remove();
}
function removeJQ() {
  $(".li2").remove();
}

function emptyJS() {
  let nums = document.querySelector("ul.nums");
  // 바닐라  js에는 엠티 없다
  nums.innerHTML = "";
}
function emptyJQ() {
  $("ul.nums").empty();
}

// 요소 탐색          다시

function findParent() {
  console.log($(".child2").parent());
}
function findParents() {
  console.log($(".child2").parents());
  // 4개의 조상 body html까지
}
function findNext() {
  console.log($(".child2").next());
}
function findPrev() {
  console.log($(".child2").prev());
}
function findChildren() {
  console.log($(".parent").children());
}

// 클래스 조작하기   다시하시
function addClass() {
  $("#hi").addClass("fs-50");
}

function removeClass() {
  $("#hi").removeClass("color-blue");
}

function hasClass() {
  console.log($("#hi").hasClass("fs-50"));
}

function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
