class henkilo{

    #osoite

    constructor(nimi,ika){
        this.nimi=nimi; //propertmuuttuja
        this.ika=ika; //propertmuuttuuja
        this.#osoite= "esimekkitie 1 "
    }

    esittele(){
       return "Henkilön nimi = " + this.nimi + " ja ikä = " + this.ika;
    }
    get osoite(){
        return this.#osoite;
    }
}

const henkillo1=new henkilo("John Doe", 30);
const henkillo2=new henkilo("Jane Doe", 25);

console.log(henkillo1.esittele());
console.log(henkillo2.esittele());
//Luku ei onnistu, koska private
//console.log("osoite: " + henkilo1.#osoite);
//ei toimi
//henkilo1.#osoite= "Testi";
console.log("Osoite: " + henkillo1.osoite);