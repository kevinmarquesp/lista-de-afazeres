// Data atual do sistema.
function dataSistema() {
    let newDate = new Date()
    let dataAtual = newDate.toLocaleString( 'pt-br', {
        month:'long',
        weekday:'long',
        day:'numeric'
    })
    dataAtualDoSistema.innerText = dataAtual
}





// Selecionando os elementos.
const dataAtualDoSistema = document.querySelector( 'p#data-sistema')
const limparLista = document.querySelector( 'button#limpar-lista')
const textoDoItem = document.querySelector( 'input#texto-do-item')
const adicionarNovoItem = document.querySelector( 'button#adicionar-novo-item')
