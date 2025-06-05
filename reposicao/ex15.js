const livro = {
  titulo: 'Uma breve história da humanidade',
  autor: 'Irineu',
  anoPublicacao: 2012,
  editora: {
    nome: 'editoraNome',
    cidade: 'Ribeirão Preto'
  }
}

console.log(livro)
removerPropriedade(livro, 'editora')
console.log(livro)



function listarProprieadades(obj) {
  return Object.keys(obj)
}

function atualizarObjeto(obj, chave, valor) {
  obj[chave] = valor
}

function removerPropriedade(obj, chave) {
  delete obj[chave]
}