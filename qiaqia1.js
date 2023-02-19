"use strict";
//let a, b;
let Rand = (l, r)=> (Math.ceil(Math.random() * r) % (r - l + 1) + l);
function choice(question, y, n) {
    if (confirm(question)) y();
    else n();
}
let p1_entity = document.getElementById("p1_id");
let p_entity = document.getElementById("p_id");
let p1_content = "";
let face = "(*╹▽╹*)";
let all_face = new Array();
all_face = [ "", "(*╹▽╹*)", "+[*╹▽╹*]+", "%[*╹▽╹*]L", "w[*╹▽╹*]w", "-[*╹▽╹*]Y", "+-{*╹▽╹*}-+", "!-{*╹▽╹*}-@", "m-{*╹▽╹*}-w", "x-{*╹▽╹*}O+", "owo", "OO\\{*╹▽╹*}/OO"];
let death_flag = 0, eat_count = 0, hunger = 0;
let fire_count = 0,water_count=0,grass_count=0;
let level = 1, cooltime = 20, now_type = 1,all_type=1;
let type_ar = new Array;
type_ar[1] = 1;
let has_eaten = "";
let tis = new Array();
tis = ["", "别撑死了", "尝试按顺序吃掉 F I R E", "不同元素也许可以混合哦", "可以使用 DEGENERATION 降一级"];
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
function checkeaten() {
    if (has_eaten.substring(has_eaten.length-4) == "fire") return 1;
    else if (has_eaten.substring(has_eaten.length-5) == "water") return 2;
    else if (has_eaten.substring(has_eaten.length-5) == "grass") return 3;
    else if (has_eaten.substring(has_eaten.length-12) == "degeneration") return 4;
    else return 0;
}
let neat = 0;
let level_disp = 0, fire_disp = 0, water_disp = 0, grass_disp = 0;
function updatep0() {
    if (type_ar[now_type] != 1) {
        type_ar[now_type] = 1;
        all_type++;
    }
    document.getElementById("p3_id").innerHTML = "已发现 " + all_type + "/12 种形态";
    if (all_type == 12) {
        document.getElementById("p3_id").innerHTML = "已发现全部形态！！好厉害好厉害(*╹▽╹*)";
    }
}
function updatep() {
    updatep0();
    if (level >= 2) level_disp = 1;
    if (fire_count != 0) fire_disp = 1;
    if (water_count != 0) water_disp = 1;
    if (grass_count != 0) grass_disp = 1;
    if(level_disp!=0)document.getElementById("p2_id").innerHTML = "等级 " + level;
    if (fire_disp != 0) document.getElementById("p4_id").innerHTML = "火元素数量：" + fire_count;
    if (water_disp != 0) document.getElementById("p5_id").innerHTML = "水元素数量：" + water_count;
    if(grass_disp!=0)document.getElementById("p6_id").innerHTML = "草元素数量：" + grass_count;
    neat = checkeaten();
    if (neat == 1) fire_count++;
    else if (neat == 2) water_count++;
    else if (neat == 3) grass_count++;
    else if (neat == 4&&level>0) {
        eat_count = 0;
        level--;
        fire_count = water_count = grass_count = 0;
        if (level <= 1) cooltime = 20,now_type=1;
        else if (level == 2) cooltime = 14,now_type=2;
        else if (level == 3) cooltime = 8, now_type = 6;
        face = all_face[now_type],p_entity.style = "color:black";
        if (level == 0) {
            now_type = 10, p_entity.style = "color:grey";
            face = all_face[now_type];
            document.getElementById("p_id").innerHTML = face + " 我变得太小啦";
        } else {
            document.getElementById("p_id").innerHTML = face + " 我变小啦";
        }
        return;
    }
    if (level == 0 && eat_count >= 10) {
        level = 1, cooltime = 20, now_type = 1,p_entity.style = "color:black";
        face = all_face[now_type];
        document.getElementById("p_id").innerHTML = face + " 我变回原样啦";
    }else if (level == 1 && eat_count >= 20) {
        level = 2, cooltime = 14;
        if (fire_count >= 3) now_type = 3, p_entity.style="color:red";
        else if (water_count >= 3) now_type = 4, p_entity.style="color:blue";
        else if (grass_count >= 3) now_type = 5, p_entity.style="color:green";
        else now_type = 2,p_entity.style="color:black";
        face = all_face[now_type];
        fire_count = water_count = grass_count = 0;
        document.getElementById("p_id").innerHTML = face + " 我进化啦";
    } else if (level == 2 && eat_count >= 80) {
        level = 3, cooltime = 8;
        if (fire_count >= 3&&water_count>=3) now_type = 7, p_entity.style="color:purple";
        else if (water_count >= 3&&grass_count>=3) now_type = 8, p_entity.style="color:cyan";
        else if (grass_count >= 3&&fire_count>=3) now_type = 9, p_entity.style="color:orange";
        else now_type = 6,p_entity.style="color:black";
        face = all_face[now_type];
        fire_count = water_count = grass_count = 0;
        document.getElementById("p_id").innerHTML = face + " 我又进化啦";
    } else if (level == 3 && eat_count >= 300) {
        level = 4, cooltime = 2;
        if (fire_count >= 10 && water_count >= 10 && grass_count >= 10) now_type = 10, p_entity.style = "color:black";
        else { death_flag = 3; return; }
        face = all_face[now_type];
        fire_count = water_count = grass_count = 0;
        document.getElementById("p_id").innerHTML = face + " 我超进化啦";
    } else if (neat == 1) {
        p_entity.innerHTML = face + " 我吃掉了一个 火元素 诶";
    } else if (neat == 2) {
        p_entity.innerHTML = face + " 我吃掉了一个 水元素 诶";
    } else if (neat == 3) {
        p_entity.innerHTML = face + " 我吃掉了一个 草元素 诶";
    } else document.getElementById("p_id").innerHTML = face + " 我吃了" + eat_count + "个字母啦";
}
function updatep1(nTime) {
    if (death_flag != 0) {
        now_type = 12;
        if (death_flag == 1)p_entity.innerHTML ="(x▽x)我撑死啦";
        else if (death_flag == 2) p_entity.innerHTML = "(x▽x)我饿死啦";
        else if(death_flag==3)p_entity.innerHTML = "(x▽x)吃的太饱力";
        updatep0();
        let nmax = 1;
        if (level >= 3) nmax = 2;
        else if (fire_disp != 0 || water_disp != 0 || grass_disp != 0) nmax = 4;
        document.getElementById("p7_id").innerHTML = "提示：" + tis[Rand(1, nmax)];
        return;
    }
    if (nTime % cooltime == 0) {
        if (p1_content.length >= 1) {
            hunger = 0;
            if (p1_content.length >= 50) {
                death_flag = 1;
            } else {
                has_eaten += p1_content.substring(p1_content.length-1);
                p1_content = p1_content.substring(0, p1_content.length - 1);
                eat_count++;
                updatep();
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