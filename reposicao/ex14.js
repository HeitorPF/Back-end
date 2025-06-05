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
atualizarObjeto(livro, 'titulo', 'tituloLivro')
console.log(livro)



function listarProprieadades(obj) {
  return Object.keys(obj)
}

function atualizarObjeto(obj, chave, valor) {
  const keys = Object.keys(obj)
  for(let i = 0; i< keys.length; i++) {
    if(keys[i] === chave) {
      obj[chave] = valor
      break
    }
  }
}