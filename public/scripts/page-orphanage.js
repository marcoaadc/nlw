const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
};

// get value from html
const lat = document.querySelector("span[data-lat]").dataset.lat
const lng = document.querySelector("span[data-lng]").dataset.lng


//criando uma mapa
const map = L.map("mapid", options).setView([lat, lng], 15);

// criando um tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// criando um icone

const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAchor: [170, 2],
})

L.marker([lat,lng], { icon }).addTo(map);

// galeria de images

function selectImages(event) {
  const button = event.currentTarget;

  // remover classe active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // selecionar a imagem
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-datails > img");

  //atualizar containaer de imagem
  imageContainer.src = image.src;

  //adicionar a classe active no botao click
  button.classList.add("active");
}
