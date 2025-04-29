// nokte in project in bud ke baraye estefade az interval 
// bayad be sorat sarasari taerif konim ke dar tabe haye stop
// va start shenakhte shode bashad alan ba do button mitavan 
// interval ra control kard
var myinterval;
var milisec=0;
var sec=0;
var min=0;
var pa1 = document.getElementById("par1");
var pa2 = document.getElementById("par2");
var pa3 = document.getElementById("par3");
var bts = document.getElementById("stobt");
var btst = document.getElementById("stabt");
function counter(){
    milisec+=1;  
    pa3.innerHTML = milisec; 
    if(milisec>99){
        sec+=1;
        milisec=0;
        pa2.innerHTML = sec; 
        pa3.innerHTML = milisec;
    }
    if(sec>59){
        sec=0;
        min+=1;
        pa2.innerHTML = sec; 
        pa3.innerHTML = milisec;
        pa1.innerHTML = min;
    }
}
function startfunction(){
    clearInterval(myinterval);
    myinterval = setInterval(counter,10);
    bts.setAttribute("style","background-color:red;");
    btst.innerHTML="Start";
    btst.setAttribute("style","background-color:rgb(0, 162, 255);");
   
}
function myStopfunction(){
    clearInterval(myinterval);
    bts.setAttribute("style","background-color:rgb(0, 162, 255);");
    btst.setAttribute("style","background-color: rgba(132, 0, 255, 0.811);");
    btst.innerHTML="Resume";
}
function reset(){
    clearInterval(myinterval);
    btst.setAttribute("style","background-color:rgb(0, 162, 255);");
    bts.setAttribute("style","background-color:rgb(0, 162, 255);");
    btst.innerHTML="Start";
    milisec=0;
    sec=0;
    min=0;
    pa3.innerHTML=milisec;
    pa2.innerHTML=sec;
    pa1.innerHTML=min;
}