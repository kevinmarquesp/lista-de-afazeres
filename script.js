// Quando a página abrir.
function quandoCarregar() {
    dataSistema()
    selecionarNoArmazenamentoInterno()
    atualizarPagina()
}

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

// Atualizando a página e selecionando cada item.
function atualizarPagina() {
    listaPrincipal.innerHTML = ''

    for( let c in lista) {
        if( !(lista[c].lixo)) {
            let classMarcado = lista[c].marcado? 'marcado' : 'nao-marcado'
            let textoMarcado = lista[c].marcado? 'Desmarcar' : 'Marcar'

            let texto = `<li class="item ${classMarcado}">
                <span id="texto">${lista[c].nome}</span>
                <button id="remover">REMOVER</button>
                <button id="marcar">${textoMarcado}</button>
            </li>`

            listaPrincipal.insertAdjacentHTML( 'beforeend', texto)
        }
    }

    let removerButtons = document.querySelectorAll( 'button#remover')
    let marcarButtons = document.querySelectorAll( 'button#marcar')

    for( let c = 0; c < lista.length; c++) {
        removerButtons[c].addEventListener( 'click', function() {
            lista[c].lixo = true
            lista = limparOsLixos()
            atualizarPagina()
        })
        marcarButtons[c].addEventListener( 'click', function() {
            if(lista[c].marcado) {
                lista[c].marcado = false
            } else {
                lista[c].marcado = true
            }
            atualizarPagina()
        })
    }
    salvarNoArmazenamentoInterno()
}

// Removendo um item da lista.
function limparOsLixos() {
    let resultado = []
    for( let c = 0; c < lista.length; c++) {
        if( !(lista[c].lixo)) {
            resultado.push(lista[c])
        }
    }
    return resultado
}

// Armazenar e selecionar no computador da pessoa.
function salvarNoArmazenamentoInterno() {
    localStorage.setItem( 'lista', JSON.stringify(lista))
}
function selecionarNoArmazenamentoInterno() {
    lista = JSON.parse( localStorage.getItem( 'lista'))
    if(lista === null) {
        lista = []
    }
    console.log(lista)
}


// Declarando as variáveis.
let lista = []

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
            nome:textoDoItem.value,
            marcado: false,
            lixo: false
        })
        atualizarPagina()
    }
    textoDoItem.value = ''
})

// Limpando/removendo a lista inteira.
limparLista.addEventListener( 'click', function() {
    for( let c in lista) {
        lista[c].lixo = true
    }
    lista = limparOsLixos()
    atualizarPagina()
})