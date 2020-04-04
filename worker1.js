var sen=new Array();
sen[0]="nothing here";
sen[1]="繁华世界的边缘...";
sen[2]="有多少人会发现这句话每10秒钟变一次呢？";
sen[3]="333=3*3*37";
sen[4]="这个小站到处都是彩蛋。";
sen[5]="而难益难，而险益险。";
sen[6]="忘了我，然后记住你忘了一个人。";
function nchg()
{
    postMessage(sen[Math.floor(Math.random() * 7)]);
    setTimeout("nchg()",10000);
}
nchg();