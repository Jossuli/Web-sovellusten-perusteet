let x=5;

console.log('x arvo on '+x);

function hello(){
    console.log("hello word");
}
hello();

// Perinteinen tapa sijoittaa muuttuja merkkijonoon esim. näin
let age=20;
let tervehdys ="Hei, olen Teppo ja ikäi on " +age + " ja tykkään urheilusta";
console.log(tervehdys)

//template literal tapa
let tervehdys2= `Hei, olen Jaakko ja ikäni on ${age} ja tykkään oluesta`;
console.log(tervehdys2)

//tehtävä
function eka (nimi, ika=0){
    return `Hei, olen ${nimi} ja olen ${ika}-vuotta vanha`;
};
const toka = function(nimi, ika=0)
{
    return `Hei, olen ${nimi} ja olen ${ika}-vuotta vanha`;
};
const kolmas = (nimi, ika=0 ) => { 
    return `Hei, olen ${nimi} ja olen ${ika}-vuotta vanha`
};
//funktiokutsut
console.log(eka('Petri', 30));
console.log(toka('Jukka', 25));
console.log(kolmas('Maria', 28));

const tulokset= [8,15,23,42,7]
const [, ,,, ,]=tulokset;
const [kolmonen,, ,]=tulokset;
const [, ,, ,]=tulokset;

console.log(tulokset[2]);

//const{merkki:Toyota}=auto;
//const{vuosi:2021}=auto;
//const {vaihteisto:manuaali} =auto;

//console.log(auto.merkki);
//console.log(auto.vuosi);
//console.log(auto.vaihteisto);
