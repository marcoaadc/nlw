const Database = require('./db');
const saveOrphanage = require("./saveOrphanage")

Database.then(async db =>{
    // inserir dados na tabela 
    await saveOrphanage(db,{
        lat:"-27.5952019",
        lng:" -48.5274819",
        name:"Lar das meninas",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"98763091125",
        images:[

            "https://images.unsplash.com/photo-1573261524302-6f1dc1458378?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1562790519-60c4307f025f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 18h até 8",
        open_on_weekends:"1"
    })

    //consultar dados na tabela
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo id
    const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanages)

    // apagar dados da tabela (DELETE FROM orphanages)apaga tudo
    console.log(db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(db.run("DELETE FROM orphanages WHERE id = '5'"))

})