const app = require('express')();


app.get('/', (req, res) => {
    res.json(
        [
            {
                "nome" : "Posto Aldo",
                "rua" : "Rodovia dos Imigrantes, Km 05",
                "bairro" : "Distrito Industrial",
                "cidade" : "Cuiabá - MT",
                "gasolina" : 5.45
            },
        
            {
                "nome" : "Posto XV",
                "rua" : "Avenida Xv de Novembro, 30",
                "bairro" : "Porto",
                "cidade" : "Cuiabá - MT",
                "gasolina" : 5.43
            },
        
            {
                "nome" : "Posto Emboava Miguel Sutil",
                "rua" : "Avenida Miguel Sutil, 4708",
                "bairro" : "Alvorada",
                "cidade" : "Cuiabá - MT",
                "gasolina" : 5.45
            }
        ]
    )
})


const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
    console.log('rodando')
})



