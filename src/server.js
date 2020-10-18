//importando dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages")

// iniciiando express
const server = express()
server
//utilizando arquivos estaticos 
.use(express.static("public"))

// config template engine
.set("views", path.join(__dirname,'views'))
.set("view engine", "hbs")

//rota da aplicação
.get("/", pages.index) 
.get("/orphanage", pages.orphanage)
.get("/orphanages", pages.orphanages)
.get("/create-orphanage", pages.createOrphanage)


//subindo servidor
server.listen(5500)
