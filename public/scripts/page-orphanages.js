//criando uma mapa
const map = L.map('mapid').setView([-27.5952019,-48.5274819], 15);

// criando um tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// criando um icone

const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAchor:[170,2]
})

// criando um popup
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanages"> <img src="./public/images/arrow-white.svg"> </a> ')


//criandoe adicionando um marker
L
.marker([-27.5952019,-48.5274819], {icon})
.addTo(map)
.bindPopup(popup)


