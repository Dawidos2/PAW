

function liczPaliwo(){
    var rodzaj= parseInt (document.getElementById("a").value);
    var ile= parseInt (document.getElementById("b").value);
    if(rodzaj==1){
       var wynik=ile*4;
        document.getElementById("napis").innerHTML="Koszt paliwa: " + wynik + " zł";
    }
    else if(rodzaj==2){
       var wynik=ile*3.5;
        document.getElementById("napis").innerHTML="Koszt paliwa: " + wynik + " zł";
    }
    else{
        
        document.getElementById("napis").innerHTML="Podaj poprawne dane";
    } 
}
