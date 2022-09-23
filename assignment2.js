function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
function monthyr(){
    var month;
    var year;
    var date = new Date();
    month=document.getElementById("month").value;
    year=document.getElementById("year").value;
    document.getElementById("res").innerHTML= "The number of days in a selected month is :" +daysInMonth (month, year);
}

