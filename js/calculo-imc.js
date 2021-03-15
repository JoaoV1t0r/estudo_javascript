var nome = prompt('Digite seu nome:')
var altura = prompt('Digite sua altura(Em centímetros):')
var peso = prompt('Digite seu peso em quilogramas:')
altura = parseInt(altura)
altura /= 100
peso = parseInt(peso)
imc_pessoa = peso /(altura * altura)
clas = ''
if (imc_pessoa<16) {
	clas = 'Baixo peso muito grave'
} 
else if(imc_pessoa >= 16 && imc_pessoa <= 16.99){
	clas = 'Baixo peso grave'
}
else if(imc_pessoa >= 17 && imc_pessoa <= 18.49){
	clas = 'Baixo peso'
}
else if(imc_pessoa >= 18.50 && imc_pessoa <= 24.99){
		clas = 'Peso normal'
}
else if(imc_pessoa >= 25 && imc_pessoa <= 29.99){
		clas = 'Sobrepeso'
}
else if(imc_pessoa >= 30 && imc_pessoa <= 34.99){
		clas = 'Obesidade grau 1'
}
else if(imc_pessoa >= 35 && imc_pessoa <= 39.99){
		clas = 'Obesidade grau 2'
}
else{
		clas = 'Obesidade grau 3'
}
document.write(nome + ' possui índice de massa corporal igual a ' +imc_pessoa+ ', sendo assim classificado como ' +clas+ '.')