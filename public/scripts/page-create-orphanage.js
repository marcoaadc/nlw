//criando uma mapa
const map = L.map('mapid').setView([-27.5952019,-48.5274819], 15);

// criando um tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// criando um icone
const icon = L.icon({
    iconUrl:"./images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68]
   
})

let marker;

// criando um marcador
map.on("click",(event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value=lat;
    document.querySelector("[name=lng]").value=lng;

    //remover icon
    marker && map.removeLayer(marker)

    // add icon Layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})


// adicionar fotos

function addPhotoField(){
   //pegar container de fotos #images
   const container = document.querySelector("images")

   // pegar container para duplicar
   const fieldsContainer = document.querySelectorAll(".new-upload")

   //realizar o clone da ultima imagem
   const newfieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

   // verificar se o campo esta vazio se sim não adicionar novo campos
   const imput = newfieldContainer.children[0]

   if ( input.value == ""){
       return
   }

   //limpar o campo antes de adicionar imagens
   input.value =""

   // adicionar o clone ao container
   container.appendChild(newfieldContainer)
}

function deletefield(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll("new-uploads")

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campos
    span.parentNode.remove();
}

// selecionar do sim e não

function toggleSelect(event){
    //retirar a class active
    document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"))

    // colocar a class active no botã clicado
    const button = event.currentTarget
    button.classList.add("active")    

    //atualizar o input selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    
}