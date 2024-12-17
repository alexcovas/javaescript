function esparell() : void {
    // Llegim el que han introduit a les variables
    var a = document.getElementById('numero1').value;
    //Passam el text d'a a números (Integer - enter)
    a = parseInt(a);

    if (a%2==0){
        document.getElementById('resposta1Verda').hidden = false;
        document.getElementById('resposta1Vermella').hidden = true;

    }else{
        document.getElementById('resposta1Vermella').hidden = false;
        document.getElementById('resposta1Verda').hidden = true;
    }

}

function divisors() :void  {

    if (b%3==0) {
        document.getElementById('divisibleper3').hidden = false;
    }

    if (b%6==0){
    document.getElementById('divisibleper6').hidden = false
        document.getElementById('divisibleper2').hidden = true
        document.getElementById('divisibleper3').hidden = true


    }
}

function valorsentre():void {

    let a = document.getElementById('numeroA').value;
    let b = document.getElementById('numeroB').value;
    a= parseInt(a);
    b=parseInt(b);
let valors ="":
if (a>b){
    for(let 1 = a-1; i>b  )



}






}
