var opcao = prompt('Digite sua opção:')
opcao = parseInt(opcao)
switch(opcao){
	case 1:
		//se opcao === 1
		document.write('Opção 1')
		break
	case 2:
		// se opcao ===2
		document.write('Opção 2 ')
		break
	default:
		// se paraetro não encontrado
		document.write('Opção não encontrada')
		break 
}