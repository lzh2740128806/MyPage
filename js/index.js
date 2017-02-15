/**
 * Created by 我是李振虎 on 2016/11/28.
 */
window.onload=function () {
    var A=document.querySelectorAll('#nav div a');
    A[0].onclick=getN(0);
    A[1].onclick=getN(me.offsetTop-nav.offsetHeight);
    A[2].onclick=getN(show.offsetTop-nav.offsetHeight);
    A[3].onclick=getN(contact.offsetTop-nav.offsetHeight);


    //toWhere
    function getN(to) {
        var timer=null;

        //移动
        function move(speed) {
            document.body.scrollTop+=speed;
            if(Math.abs(speed*2)>document.body.scrollTop-to && document.body.scrollTop-to>-Math.abs(speed*2)){
                clearInterval(timer);
                document.body.scrollTop=to;
            }
        }
        //返回函数
        return function () {
            clearInterval(timer);
            var speed=0;
            if(document.body.scrollTop-to>0){
                speed=-15;
            }
            if(document.body.scrollTop-to<0){
                speed=15;
            }
            timer=setInterval(function () {
                move(speed);
            },5);
        }
    }

    document.onscroll=function () {
        if(document.body.scrollTop>0){
            bcolor(0);
        }
        if(document.body.scrollTop>=me.offsetTop-nav.offsetHeight){
            bcolor(1);
        }
        if(document.body.scrollTop>=show.offsetTop-nav.offsetHeight){
            bcolor(2);
        }
        if(document.body.scrollTop>=contact.offsetTop-nav.offsetHeight){
            bcolor(3);
        }
        function bcolor(a) {
            for(var i=0;i<A.length;i++){
                A[i].style.borderColor='';
            }
            A[a].style.borderColor='#aaa';
        }
    }



    var box=document.querySelector('#say .box');
    var boxpar=document.querySelector('#say');
    var aSpan=document.querySelectorAll('#say .circle span');
    var n=0;
    var timer=null;
    function slide() {
        box.scrollLeft+=5;
        if( box.scrollLeft-n*box.offsetWidth>-10 && box.scrollLeft-n*box.offsetWidth<10){
            box.scrollLeft=n*box.offsetWidth;
        }else{
            setTimeout(slide,1);
        }
    }
    function move() {
        n++;
        if(n==4){
            box.scrollLeft='0';
            n=1;
        }
        slide();
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].style.background='';
        }
        var index=n==3? 0:n;
        aSpan[index].style.background='#999';
    }
    timer=setInterval(move,4000);
    boxpar.onmouseover=function () {
        clearInterval(timer);
    }
    boxpar.onmouseout=function () {
        timer=setInterval(move,4000);
    }

    boxpar.onclick=function () {
        move();
    }

}