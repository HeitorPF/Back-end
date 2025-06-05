const aluno = {
  nome: 'Heitor',
  curso: 'Engenharia',
  matriculado: true
}
const alunos = [
  {
    nome: 'Heitor',
    nota: 8
  },
  {
    nome: 'João',
    nota: 7.5
  },
  {
    nome: 'José',
    nota: 6
  }
]

const nomeAluno = aluno.nome
console.log(nomeAluno)

console.log(alunos)
const alunosAprovados = alunos.filter((aluno) => {
  return aluno.nota >= 7 
})
console.log(alunosAprovados)