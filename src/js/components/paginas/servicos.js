let servico = ""

const detalhes = [
    {
        titulo:'serviço 1',
        descricao:'xxxxxxxx xxxxxxxxx xxxxx',
        imagem: 'src/img/monaco.jpg'
    },
     {
        titulo:'serviço 2',
        descricao:'xxxxxxxx xxxxxxxxx xxxxx',
        imagem: 'src/img/italia.jpg'
    },
     {
        titulo:'serviço 3',
        descricao:'xxxxxxxx xxxxxxxxx xxxxx',
        imagem: 'src/img/paris.jpg'
    },
     {
        titulo:'serviço 4',
        descricao:'xxxxxxxx xxxxxxxxx xxxxx',
        imagem: 'src/img/catar.jpg'
    },
    {
        titulo:'serviço 5',
        descricao:'xxxxxxxx xxxxxxxxx xxxxx',
        imagem: 'src/img/espanha.jpg'
    }
]

//loop para criar os 'cards'
servico += `<div class="bem-grid-auto">`
for(let i=0; i < detalhes.length; i++){
 servico += `
   
        <div class="bem-card">
             <img class="bem-card__image" src="${detalhes[i].imagem}" alt="Image description">
             <div class="bem-card__body">
                  <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
                 <p>${detalhes[i].descricao}</p>
            </div>
        </div>


   
 `
}
servico += `</div>`

export default servico;
