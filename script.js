function calcularNutrientes(){
	let peso = parseFloat(document.getElementById('peso').value);

		if(isNaN(peso)||peso <= 0 ){
		alert('Insira um peso valido!')
		return;

		}

	let agua = peso * 0.035;
	let copos = agua / 0.2;
	let proteina = peso * 2;
	let creatina = peso * 0.03;


	document.getElementById('agua').innerText = `Consumo de Agua: ${agua.toFixed(1)} l por dia`;
	document.getElementById('coposDaguas').innerText = `Equivante a ${copos.toFixed(0)} copos de agua de 200 ml por dia`;
	document.getElementById('proteina').innerText = `Consumo de proteina: ${proteina.toFixed(0)} g por dia`;
	document.getElementById('creatina').innerText = `Consumo de creatina: ${creatina.toFixed(0)} g por dia`;



}
