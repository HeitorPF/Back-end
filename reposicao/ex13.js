const livro = {
  titulo: 'Uma breve história da humanidade',
  autor: 'Irineu',
  anoPublicacao: 2012,
  editora: {
    nome: 'editoraNome',
    cidade: 'Ribeirão Preto'
  }
}

console.log(listarProprieadades(livro))

function listarProprieadades(obj) {
  return Object.keys(obj)
}