const product = { // Olio
  title: "Laptop",
  price: 999.99
};

const productsElement = document.querySelector("#products");// haetaan muuttuja div pääsy

// Edellisen tunnin DOM-rakenne on valmiina.
const container = document.createElement("div");// luodaan yksi tyhdä div ja laitetaan arvo product
container.className = "product";

const title = document.createElement("div"); //saa teksti sisältöä
title.textContent = product.title;

const price = document.createElement("div"); //saa hinnan sisällön
price.textContent = product.price + " €";

container.append(title); //Lisää elementtiin toisen lapsielementin
container.append(price); //Lisää elementtiin toisen lapsielementin
productsElement.append(container); //Tällä tulee näkyviin

// TUNNILLA:
// 1. Luo button createElementillä.
// 2. Aseta sen tekstiksi "Suosikki".
// 3. Liitä button container-elementtiin.
// 4. Lisää buttonille click-event listener.
// 5. Muuta napin tekstiä tai käytä container.classList.toggle("favorite").
const elementButton=document.createElement('button');

elementButton.textContent = "Suosikki"
container.append(elementButton);

//4 + 5 kohdat
elementButton.addEventListener('click', () => {
  console.log('click')
  container.classList.toggle("favorite");
});