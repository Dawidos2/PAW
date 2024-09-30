var rodzaj= parseInt (document.getElementById("a").value);
var ile= parseInt (document.getElementById("b").value);
var wynik;
function liczPaliwo(){
    if(rodzaj==1){
        wynik=ile*4;
        document.getElementById("napis").innerHTML="Koszt: " + wynik + " zł";
    }
    else if(rodzaj==2){
        wynik=ile*3.5;
        document.getElementById("napis").innerHTML="Koszt: " + wynik + " zł";
    }
    else{
        wynik=ile*0;
        document.getElementById("napis").innerHTML="Koszt: " + wynik + " zł";
    } 
}
