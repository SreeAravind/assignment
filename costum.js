function color1(){
    document.getElementById("clr").style.background="red";
}
function color2(){
    document.getElementById("clr").style.backgroundColor="yellow";
}
function color3(){
    document.getElementById("clr").style.backgroundColor="green";
}
function selectCity(){
  var cty=document.getElementById("city").value;
  document.getElementById("slcCity").innerHTML="selected city  : " +cty;
}
document.getElementById("city").style.backgroundColor="gray";
function paraClr(){
    document.getElementById("para").style.color="blue";
    document.getElementsByClassName("para1")[0].style.color="red";
document.getElementsByClassName("hdg")[0].style.color="orange";

}

function para1Clr(){
    document.getElementById("para").style.color="gray";
    document.getElementsByClassName("para1")[0].style.color="violet";
document.getElementsByClassName("hdg")[0].style.color="brown";

}
function keyPress(){
    var pes=document.getElementById("rnmTxt").value;
    document.getElementById("txt").innerHTML=pes;
}
function calculator(actType){
    let num1;
    let num2;
    let res;
    if(actType=='add'){
        num1=document.getElementById("val1").value;
        num2=document.getElementById("val2").value;
        res=+num1 + +num2;
        document.getElementById("result").value=res;
    }
  else if(actType=='sub'){
        num1=document.getElementById("val1").value;
        num2=document.getElementById("val2").value;
        res=num1 - num2;
        document.getElementById("result").value=res;
    }
    else if(actType=='mul'){
        num1=document.getElementById("val1").value;
        num2=document.getElementById("val2").value;
        res=num1 * num2;
        document.getElementById("result").value=res;
    }
    else if(actType=='div'){
        num1=document.getElementById("val1").value;
        num2=document.getElementById("val2").value;
        res=num1 / num2;
        document.getElementById("result").value=res;
    }

}
