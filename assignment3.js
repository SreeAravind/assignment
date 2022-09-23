function country(){
let country;
country=document.getElementById("country").value;
document.getElementById("capital").value=country;
}
function capital(){
    let capital;
    capital=document.getElementById("capital").value;
    document.getElementById("country").value=capital;
}