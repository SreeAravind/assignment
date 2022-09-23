function gradecal(){
  let  mark =document.getElementById("markss").value;
  console.log(mark);
    if (mark>90 && mark<=100){
        document.getElementById("gradeis").innerHTML="The Grade is S ";
    }
    else if(mark<=90 && mark>80){
      document.getElementById("gradeis").innerHTML="The Grade is A ";

    }
    else if(mark<=80 && mark>70){
      document.getElementById("gradeis").innerHTML="The Grade is B ";

    }
    else if(mark<=70 && mark>60){
      document.getElementById("gradeis").innerHTML="The Grade is C ";

    }
    else if(mark<=60 && mark>50){
      document.getElementById("gradeis").innerHTML="The Grade is D ";

    }
    else if(mark<=50 && mark>40){
      document.getElementById("gradeis").innerHTML="The Grade is B ";

    }
    else if(mark<40){
      document.getElementById("gradeis").innerHTML="Failed";
    }
 
}