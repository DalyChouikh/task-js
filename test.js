
function alpha(ch){
  ok=true;
  for (let i=0;i<ch.length ;i++)
  {
    if (ch[i].toUpperCase()<'A' || ch[i].toUpperCase()>'Z')
    {
      ok=false;
    }
  }
  return ok;
}

function test(){

let f_name=document.getElementById("f_name").value;
let error=document.getElementById("er1");
if(!alpha(f_name)|| f_name.length==0)
{
error.style.display="block";
return false;
}
else {
  error.style.display="none";
}

let l_name=document.getElementById("l_name").value;
let error2=document.getElementById("er2");
if(!alpha(l_name)||l_name.length==0)
{
error2.style.display="block";
return false;
}
else {
  error2.style.display="none";
}

let error3=document.getElementById("er3");
let email=document.getElementById("email").value;
if (email.lastIndexOf(".")<email.lastIndexOf("@") || email.lastIndexOf(".")==-1 || email.length==0)
{
error3.style.display="block";
return false;
}
else {
  error3.style.display="none";
}


let error4=document.getElementById("er4");
let phone=document.getElementById("num").value;

if (phone.length!=8 || phone.indexOf(".")!=-1)
{
  error4.style.display="block";
  return false;
}
else {
  error4.style.display="none";
}


let psw1=document.getElementById("psw1").value;

let up=0;
let nrml=0;
let spec=0;
let numb=0;

for (let i=0;i<psw1.length;i++)
{
  if (psw1[i]>='a'&&psw1[i]<='z')
  {
    nrml++;
  }
    else if(psw1[i]>='A'&&psw1[i]<='Z')
    {
      up++;
    }
    else if (psw1[i]>='0'&&psw1[i]<='9')
    {
      numb++;
    }
    else
    {
      spec++;
    }

}
let error5=document.getElementById("er5");
if (up==0 || nrml==0 || spec ==0 || numb ==0 )
{
  error5.style.display="block";
}
else{
error5.style.display="none";
}

let psw2=document.getElementById("psw2").value;
let error6=document.getElementById("er6");
if (psw2!=psw1)
{
  error6.style.display="block";
}
else {
  error6.style.display="none";
}

let error7=document.getElementById("er7");
if (!document.getElementById("f").checked && ! document.getElementById("m").checked)
{
  error7.style.display="block";
  return false;
}
else {
  error7.style.display="none";

}

let today = new Date().toISOString();
let y=today.slice(0,4);
let m=today.slice(5,7);
let d=today.slice(8,10);

let birth=document.getElementById("birth").value;

let yy=birth.slice(0,4);
let mm=birth.slice(5,7);
let dd=birth.slice(8,10);


let years=+y-yy;
let months=+m-mm;
let days=+d-dd;
if((months<0 )||(months==0 && days<0))
{
  years--;
}

let error8=document.getElementById("er8");
if (years<18 || birth.length==0)
{
  error8.style.display="block";
  return false;
}
else {
  error8.style.display="none";
}

}
