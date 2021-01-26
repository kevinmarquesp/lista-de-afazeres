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

// Adicionar um item novo a lista.
function atualizarTextoNaPagina(item) {
    let classMarcar = item.marcado? 'marcado' : 'nao-marcado'
    let buttonMarcar = item.marcado? 'Desmarcar' : 'Marcar'

    let texto = `<li class="item ${classMarcar}"> <span id="texto">${item.texto}</span>
        <button id="remover">REMOVER</button>
        <button id="marcar">${buttonMarcar}</button>
    </li>`
    listaPrincipal.insertAdjacentHTML( 'beforeend', texto)
}

// Removendo um item da lista.




// Declarando as variáveis.
let lista = [], id = 0

// Selecionando os elementos.
const dataAtualDoSistema = document.querySelector( 'p#data-sistema')
const limparLista = document.querySelector( 'button#limpar-lista')
const textoDoItem = document.querySelector( 'input#texto-do-item')
const adicionarNovoItem = document.querySelector( 'button#adicionar-novo-item')
const listaPrincipal = document.querySelector( 'ul.lista-principal')

// Key event e Click event.
document.addEventListener( 'keyup', function(event) {
    if( event.keyCode == 13) {
        adicionarNovoItem.dispatchEvent( new Event('click'))
    }
})
adicionarNovoItem.addEventListener( 'click', function() {
    if(textoDoItem.value) {
        lista.push( {
            texto:textoDoItem.value,
            id: id,
            marcado: false,
            lixo: false
        })

        listaPrincipal.innerHTML = ''
        for( let c in lista) {
            atualizarTextoNaPagina( lista[c])
        }
    }
    textoDoItem.value = ''
    id++
})