let btn1=document.getElementById("dec");
let btn2=document.getElementById("res");
let btn3=document.getElementById("inc");
let change=document.getElementById("value");

let a=0;
btn1.addEventListener("click",function(){
      a--;
      if(a<0)
      change.style.color = "red";
      change.innerText=a;
      if(a==0)
      value.style.color = "black";
});
btn2.addEventListener("click",function(){
      a=0;
      change.style.color = "black";
      change.innerText=a;
});
btn3.addEventListener("click",function(){
      a++;
      if(a>0)
      change.style.color = "green";
      change.innerText=a;
      if(a==0)
      value.style.color = "black";
});