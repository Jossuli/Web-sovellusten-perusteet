// W2L3: Taulukkometodit ja JSON
// Täydennä funktiot. Kaikkien funktioiden pitää olla puhtaita:
// älä muuta parametrina saatua alkuperäistä taulukkoa.

export function getBySensor(cameras, sensor) {
  // TODO: palauta vain kamerat, joiden sensor-kenttä vastaa parametria.

  //haetaan kamerat, joiden sensor-kenttä vastaa APS-C
  let searchResult = [];

  //for(let i=0;i<cameras.length;i++)
  //{
    //const sensorType=cameras[i].sensor;
    //if(sensorType==="APS-C")
    //{
      // löytyi
      //searchResult.push(cameras[i]);
    //}

  //}
  searchResult= cameras.filter(camera => camera.sensor === sensor);

  return searchResult;
}

export function getInStock(cameras) {
  // TODO: palauta vain varastossa olevat kamerat.
  let searchResult = cameras.filter(camera => camera.inStock === true);

  return searchResult;
}

export function sortByPrice(cameras, order = "asc") {
  // TODO: palauta uusi taulukko hinnan mukaan järjestettynä.
  // order voi olla "asc" tai "desc".
  return [];
}

export function getAveragePrice(cameras) {
  // TODO: laske kameroiden keskihinta. Tyhjälle taulukolle palauta 0.
  return 0;
}

export function toDisplayObjects(cameras) {
  // TODO: muunna kamerat muotoon:
  // { id, title: "Brand Model", details: "Sensor, video, €price", rating }

  return cameras.map(
    kamera => {
      return{
        id: kamera.id,
        title:kamera.brand + " " + kamera.model,
        details: kamera.sensor + ", " + kamera.video + ", €" + kamera.price,
        rating:kamera.rating
      }
    }
    );
  }

export function getBestAffordable(cameras, maxPrice) {
  // TODO: etsi paras kamera annetun enimmäishinnan alle.
  // Paras tarkoittaa suurinta rating-arvoa. Jos ei löydy, palauta undefined.
  return undefined;
}
