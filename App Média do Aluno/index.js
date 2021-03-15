function calcularMedia(){
	document.getElementById('resultado').style.color = '#000000'
	document.getElementById('resultado').style.color = '#000000'
	document.getElementById('nota1').style.color = '#000000'
	document.getElementById('nota2').style.color = '#000000'


	let nota1 = parseInt(document.getElementById('nota1').value)
	let nota2 = parseInt(document.getElementById('nota2').value)
	if(isNaN(nota1)){
		nota1 = 0
	}
	if(isNaN(nota2)){
		nota2 = 0
	}
	let media = (nota1 + nota2) / 2
	
	document.getElementById('mediaFinal').value = media


	if(media < 7){
		document.getElementById('resultado').value = 'Reprovado'
		document.getElementById('resultado').style.background = '#FF0000'
		document.getElementById('resultado').style.color = '#000000'
		document.getElementById('mediaFinal').style.background = '#FF0000'
	}else{
		document.getElementById('resultado').value = 'Aprovado'
		document.getElementById('resultado').style.background = '#00FF00'
		document.getElementById('resultado').style.color = '#000000'
		document.getElementById('mediaFinal').style.background = '#00FF00'
	}

}