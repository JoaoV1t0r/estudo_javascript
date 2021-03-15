function calcularIMC(altura, peso) {
	var altura = document.getElementById('altura').value
	var peso = document.getElementById('peso').value

	altura = altura / 100

	var imc_pessoa = peso / (altura * altura)

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

	document.getElementById('resultado').value = 'IMC = '+ imc_pessoa 

	document.getElementById('clas').value = 'Classicado em : ' + clas
}