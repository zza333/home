var sen=new Array();
sen[0]="nothing here";
sen[1]="��������ı�Ե...";
sen[2]="�ж����˻ᷢ����仰ÿ10���ӱ�һ���أ�";
sen[3]="333=3*3*37";
sen[4]="���Сվ�������ǲʵ���";
sen[5]="�������ѣ��������ա�";
sen[6]="�����ң�Ȼ���ס������һ���ˡ�";
function nchg()
{
    postMessage(sen[Math.floor(Math.random() * 7)]);
    setTimeout("nchg()",10000);
}
nchg();