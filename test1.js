"use strict";
//let a, b;
let Rand = (l, r)=> (Math.ceil(Math.random() * r) % (r - l + 1) + l);
function choice(question, y, n) {
    if (confirm(question)) y();
    else n();
}
let p1_entity = document.getElementById("p1_id");
let p1_content = "";
let face = "(*╹▽╹*)";
let death_flag = 0, eat_count = 0, hunger = 0;
let level = 1,cooltime=20;
// function fscroll() {
//     alert("aaa");
// }
// window.addEventListener("scroll", fscroll);

/*
function Typewritter(nstr, npos) {
    if (!nstr[npos]) return;
    p1_content += nstr[npos];
    setTimeout("Typewritter('" + nstr + "'," + (npos+1) + ")", 100);
}
*/
function Handler0(event) {
    if(event.keyCode>=65&&event.keyCode<=90)p1_content += event.key;
}
document.addEventListener("keydown", Handler0);
function updatep1(nTime) {
    if (death_flag != 0) {
        if (death_flag == 1)document.getElementById("p_id").innerHTML ="(x▽x)我撑死啦";
        else document.getElementById("p_id").innerHTML ="(x▽x)我饿死啦";;
        return;
    }
    if (nTime % cooltime == 0) {
        if (p1_content.length >= 1) {
            hunger = 0;
            if (p1_content.length >= 50) {
                death_flag = 1;
            } else {
                p1_content = p1_content.substring(0, p1_content.length - 1);
                eat_count++;
                if (level == 1 && eat_count >= 20) {
                    face = "+[*╹▽╹*]+";
                    document.getElementById("p_id").innerHTML = face+"我进化啦";
                    document.getElementById("p2_id").innerHTML = "等级 2";
                    level = 2, cooltime = 10;
                } else if (level == 2 && eat_count >= 80) {
                    face = "+\\[*╹▽╹*]/+";
                    document.getElementById("p_id").innerHTML = face+"我又进化啦";
                    document.getElementById("p2_id").innerHTML = "等级 3";
                    level = 3, cooltime = 3;
                }else document.getElementById("p_id").innerHTML = face+"我吃了" + eat_count + "个字母啦";
            }
        } else {
            hunger++;
            if (hunger >= 5) {
                death_flag = 2;
            }
        }
    }
    document.getElementById("p1_id").innerHTML = p1_content;
    setTimeout("updatep1("+(nTime+1)+")", 50);
}
updatep1(0);
/*
let n_context = prompt("input", "example");
Typewritter(n_context, 0);
*/

/*function Handler(event) {
//    alert(event.type);
    let nx = event.clientX;
    let ny = event.clientY;
    document.getElementById("p_id").innerHTML = "x:" + nx + ",y:" + ny;
}
document.addEventListener("mousemove", Handler);
*/

/*
function getHW() {
    let content = "height:";
    content = content + window.innerHeight + "<br/>" + "width:" + window.innerWidth;
    document.getElementById("p_id").innerHTML = content;
    setTimeout("getHW()", 50);
}
getHW();
*/
/*
function y0() {
    alert(2 ** 100);
}
function n0() {
    alert(2 ** 0.5);
}
//alert(Rand(1,5));
//choice('big or small?', y0, n0);
//alert(window.innerHeight);
//for (let node of document.body.children){
//    alert(node);
//}
document.getElementById("p_id").innerHTML = "bia";
let ni = document.getElementsByName("p1_name");
for (let node of ni) {
    alert(node.innerHTML);
}
*/