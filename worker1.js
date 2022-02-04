var sen=new Array();


function nchg()

{

    postMessage(sen[Math.floor(Math.random() * 16)]);

    setTimeout("nchg()",10000);

}

nchg();
