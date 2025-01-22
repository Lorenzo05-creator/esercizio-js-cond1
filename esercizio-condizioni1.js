// IF/ ELSE IF/ ELSE


//let voto = prompt(`inserisci il tuo voto!`);

//if (voto < 18) {
//    console.log(`insufficiente`);
//}else if(voto >= 18 && voto < 21){
//   console.log(`sufficiente`);  
//}else if(voto >= 21 && voto < 24){
//    console.log(`buono`);
//}else if(voto >= 27 && voto <= 29){
//    console.log(`ottimo`);  
//}else if(voto == 30){
// console.log(`eccellente`);
//}else (voto > 30){
//    console.log(`non esiste un voto maggiore di 30`); 
//} 



// SWITCH

let voto = parseInt(prompt('inserisci il voto'));
switch (true) {
    case (voto< 18):
        console.log(`insufficiente`);
        break;

    case (voto>= 18 && voto < 21):
        console.log(`sufficiente`);
        break;

    case (voto >= 21 && voto < 24):
        console.log(`buono`);
        break;

    case (voto >= 27 && voto <= 29):
        console.log(`ottimo`);
        break;
    case (voto == 30):
        console.log(`eccellente`);  
        break;
    default:  (voto > 30);
        console.log(`non esiste un voto maggiore di 30`);
}