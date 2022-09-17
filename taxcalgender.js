function taxcalgen(){
    let sal;
    let rel1;
    let age1;
    let rel2;
    var name=document.getElementById("finame").value;
    sal=document.getElementById("salery").value;
    age1=document.getElementById("age").value;
    let gender12=document.getElementById("gender").value;


    
    if (age1<18 || age1>60){
        if(gender12==="male"||gender12==="female"){
        if(sal<=300000 ){ 
            rel1=sal/100*8;
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
 }
        else if(sal>300000 && sal<500000 ){
             rel1=sal/100*10;
             rel2=rel1/100*50;
             document.getElementById("tax").value=rel2;
}
        else if(sal>500000 && sal<800000 ){
            rel1=sal/100*12;  
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
}
        else if(sal>800000 && sal<1000000 ){
            rel1=sal/100*14;
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
}
        else if(sal>1000000 ){
            rel1=sal/100*16;
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
}
}

    }
  else if(age1>18 || age1<60){
    if (gender12==="male"){
    
     
     if(sal<=300000 ){
            rel1=sal/100*8;
            rel2=rel1-0;
            document.getElementById("tax").value=rel2;
    }
        else if(sal>300000 && sal<500000 ){
            rel1=sal/100*10;
            rel2=rel1-0;
            document.getElementById("tax").value=rel2;
    }
        else if(sal>500000 && sal<800000 ){
            rel1=sal/100*12;
            rel2=rel1-0;
            document.getElementById("tax").value=rel2;
    }
        else if(sal>800000 && sal<1000000 ){
            rel1=sal/100*14;
            rel2=rel1-0;
            document.getElementById("tax").value=rel2;
    }
        else if(sal>1000000 ){
            rel1=sal/100*16;
            rel2=rel1-0;
            document.getElementById("tax").value=rel2;
    } 
}
}
else if (age1>18 || age1<60){
    if (gender12==="female"){
        if(sal<=300000 ){
            rel1=sal/100*8;
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
 }
        else if(sal>300000 && sal<500000 ){
             rel1=sal/100*10;
             rel2=rel1/100*50;
             document.getElementById("tax").value=rel2;
}
        else if(sal>500000 && sal<800000 ){
            rel1=sal/100*12;  
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
}
        else if(sal>800000 && sal<1000000 ){
            rel1=sal/100*14;
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
}
        else if(sal>1000000 ){
            rel1=sal/100*16;
            rel2=rel1/100*50;
            document.getElementById("tax").value=rel2;
}
}
}
}

    
    


   

document.getElementById("buttons").style.backgroundColor="gray";
document.getElementById("buttons").style.color="white";