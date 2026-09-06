let henkilo = {
    ika: 4,
    nimi: "Teppo"
 };

let henkilo2 = {
    ika: 3, 
    nimi: "Liisa"
}
let henkilo3={
    ika:5,
    nimi: "Kaisa"
}
// Luodaan ryhmä-olio, joka sisältää jäseniä
let ryhma = {
    nimi: "Piipposet",
    jasenet: [
        henkilo, henkilo2, henkilo3
    ]
 }

function lastenNimet(ryhma){
    for(let i=0; i<ryhma.jasenet.length; i++){
        console.log(ryhma.jasenet[i].nimi);
    }

}

 // lasketaan lasten keski-ikä ryhmässä
function keskiarvo(ryhma){
    let summa=0;
    for(let i=0; i<ryhma.jasenet.length; i++){
        summa += ryhma.jasenet[i].ika; // Käydään lapsi kerrallaan läpi ja lisätään ikä summaan
    }
    return summa / ryhma.jasenet.length;
 }

 // Kerrotaan tiedot konsolissa
 lastenNimet(ryhma);
 keskiarvo(ryhma);
