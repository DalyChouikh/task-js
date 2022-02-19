



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
function deleete(id)
{
id.remove();
}

function update(t_row)
{

document.getElementById("f_name").value=t_row.cells[0].innerHTML;
document.getElementById("l_name").value=t_row.cells[1].innerHTML;
document.getElementById("email").value=t_row.cells[2].innerHTML;
document.getElementById("num").value=t_row.cells[3].innerHTML;
document.getElementById("psw1").value=t_row.cells[4].innerHTML;

if(t_row.cells[5].innerHTML=="Male")
{
  document.getElementById("m").checked=true;
}
else if(t_row.cells[5].innerHTML=="Female"){
  document.getElementById("f").checked=true;

}

document.getElementById("birth").value=t_row.cells[6].innerHTML;


document.getElementById("up").style.display="block";
document.getElementById("btn").style.display="none";



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

if(document.getElementById("m").checked)
{
  var gender1=document.getElementById("m").value;
}
else if(document.getElementById("f").checked) {
  var gender1=document.getElementById("f").value;
}

var table = document.getElementById("myTable");

table.style.display="block"

var row = table.insertRow();
row.setAttribute("id",`row${table.rows.length-1}`);


var array=[f_name,l_name,email,phone,psw1,gender1,birth];
for (let i=0;i<7;i++)
{
  row.insertCell(i).innerHTML=array[i];

}
row.insertCell(7).innerHTML+=`<input type='button' value ='Delete' id='btn1' onclick="deleete(${row.id})">`;
row.insertCell(8).innerHTML+=`<input type='button' value ='Update' onclick='update(${row.id})'>`;
document.getElementById("update_btn").innerHTML+=`<input type="button" onclick="upd(${row.id})" id="up" value="Submit">`
}


function upd(t_row)
{

  t_row.cells[0].innerHTML=document.getElementById("f_name").value;
  t_row.cells[1].innerHTML=document.getElementById("l_name").value;
  t_row.cells[2].innerHTML=document.getElementById("email").value;
  t_row.cells[3].innerHTML=document.getElementById("num").value;
  t_row.cells[4].innerHTML=document.getElementById("psw1").value;
  if (document.getElementById("f").chekced)
  {
      t_row.cells[5].innerHTML=document.getElementById("f").value;
  }
  else if (document.getElementById("m").checked)
  {
    t_row.cells[5].innerHTML=document.getElementById("m").value;

  }
t_row.cells[6].innerHTML=document.getElementById("birth").value;


document.getElementById("up").style.display="none"; // i switched again buttons so you can add another user after updating the current one
document.getElementById("btn").style.display="block";

}
