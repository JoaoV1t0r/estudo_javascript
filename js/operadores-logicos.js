var nota1 = prompt('Digite a Nota 1:')
var nota2 = prompt('Digite a Nota 2:')
var presenca = prompt('Digite quantas presenças o aluno teve:')
media_geral = 7
nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
presenca = parseInt(presenca)
media_aluno = (nota1+nota2)/2
if (media_aluno >= media_geral && presenca >= 70) {
	document.write('Aluno APROVADO<br>')
	document.write('Média do Aluno = '+media_aluno+'<br>')
	document.write('Presença do Aluno = '+presenca+'<br>')
}
else{
	document.write('Aluno REPROVADO<br>')
	document.write('Média do Aluno = '+media_aluno+'<br>')
	document.write('Presença do Aluno = '+presenca+'<br>')
}