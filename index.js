const app = require('express')();

app.listen(8080, () => {
    console.log('servidor rodando')
})

app.get('/gasolina', (req, res) => {
    res.json(
        [
            {
                posto: 'Posto Aldo',
                rua: 'Rodovia dos Imigrantes, Km 05',
                bairro: 'Distrito Industrial',
                cidade: 'Cuiabá - MT',
                gasolina: 5.40
            },

            {
                posto: 'Posto XV',
                rua: 'Avenida Xv de Novembro, 30',
                bairro: 'Porto',
                cidade: 'Cuiabá - MT',
                gasolina: 5.43
            },

            {
                posto: 'Posto Redserv',
                rua: 'Rua Professor Francisco Torres, 85',
                bairro: 'Araés',
                cidade: 'Cuiabá - MT',
                gasolina: 5.45
            },

        ]
    )
})