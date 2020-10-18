const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
};

//criando uma mapa
const map = L.map("mapid", options).setView([-27.5952019, -48.5274819], 15);

// criando um tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// criando um icone

const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAchor: [170, 2],
});

L.marker([-27.5952019, -48.5274819], { icon }).addTo(map);

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
