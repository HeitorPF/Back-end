const aluno = {
  nome: 'Heitor',
  curso: 'Engenharia',
  matriculado: true
}
const string = JSON.stringify(aluno)
console.log(aluno)
console.log(string)
console.log(JSON.parse(string))