
function ReorganizacaoGeral(){
	ReorganizaTitulos();
	ReorganizaCapitulos();
	ReorganizaSecoes();
	ReorganizaArtigos()
	ReorganizaParagrafos();
	ReorganizaInciso();
	ReorganizaAlinea();
	ReorganizaItem();
}

function ReorganizaTitulos(){
	CapturaTitulos();
	let indiceTitulo = 0;

	titulos.map((element, index, array) => {
		$(`titulo:eq(${index})`).text() == "" ? $(`titulo:eq(${index})`).remove() : '';
		if (element.artigo == array[index + 1]?.artigo) {
			$(`titulo:eq(${index})`).text(`Titulo ${romanize(indiceTitulo += 1)} `)
		} else {
			if (element.artigo == array[index - 1]?.artigo) {
				$(`titulo:eq(${index})`).text(`Titulo ${romanize(indiceTitulo += 1)} `)
				indiceTitulo = 0;
			} else {
				$(`titulo:eq(${index})`).text(`Titulo ${romanize(indiceTitulo += 1)} `);
				indiceTitulo = 0;
			}
		}
	})
}

function ReorganizaCapitulos(){
	CapturaCapitulos();
	let indiceCapitulo = 0;

	capitulos.map((element, index, array) => {
		$(`capitulo:eq(${index})`).text() == "" ? $(`capitulo:eq(${index})`).remove() : '';
		if (element.artigo == array[index + 1]?.artigo) {
			$(`capitulo:eq(${index})`).text(`Capítulo ${romanize(indiceCapitulo += 1)} `)
		} else {
			if (element.artigo == array[index - 1]?.artigo) {
				$(`capitulo:eq(${index})`).text(`Capítulo ${romanize(indiceCapitulo += 1)} `)
				indiceCapitulo = 0;
			} else {
				$(`capitulo:eq(${index})`).text(`Capítulo ${romanize(indiceCapitulo += 1)} `);
				indiceCapitulo = 0;
			}
		}
	})
}


function ReorganizaSecoes(){
	secoes.map((x, i) => {
		$(`secao:eq(${i})`).text() == "" ? $(`secao:eq(${i})`).remove() : '';
		secoes.map((x, i) => {
			$(`secao:eq(${i})`).text(`Seção ${romanize(i += 1)} `)
		})
	})
}

function ReorganizaArtigos(){
	artigos.map((x, i) => {
		$(`artigo:eq(${i})`).text() == "" ? $(`artigo:eq(${i})`).remove() : '';
		artigos.map((x, i) => {
			let a = i + 1; //artigo
			$(`artigo:eq(${i})`).text(`Art. ${a} ${a <= 9 ? '° ' : ''} `)
		})
	})
}


function ReorganizaParagrafos(){
	CapturaParagrafos();
	let indiceParagrafo = 0;

	paragrafos.map((element, index, array) => {
		$(`paragrafo:eq(${index})`).text() == "" ? $(`paragrafo:eq(${index})`).remove() : '';

		if (element.artigo == array[index + 1]?.artigo) {
			$(`paragrafo:eq(${index})`).text(`${verificaParagrafo(indiceParagrafo += 1)} `);
		} else {
			if (element.artigo == array[index - 1]?.artigo) {
				$(`paragrafo:eq(${index})`).text(`${verificaParagrafo(indiceParagrafo += 1)} `)
				indiceParagrafo = 0;
			} else {
				$(`paragrafo:eq(${index})`).text(`Paragráfo Único - `);
				indiceParagrafo = 0;
			}
		}
	})
}

function ReorganizaInciso(){
	CapturaIncisos();
	let indiceInciso = 0;

	incisos.map((element, index, array) => {
		$(`inciso:eq(${index})`).text() == "" ? $(`inciso:eq(${index})`).remove() : '';
		alineaAlfabeto += 1;
		if (element.artigo == array[index + 1]?.artigo) {
			$(`inciso:eq(${index})`).text(`${romanize(indiceInciso += 1)} - `)
		} else {
			if (element.artigo == array[index - 1]?.artigo) {
				$(`inciso:eq(${index})`).text(`${romanize(indiceInciso += 1)} - `)
				indiceInciso = 0;
			} else {
				$(`inciso:eq(${index})`).text(`${romanize(indiceInciso += 1)} - `);
				indiceInciso = 0;
			}
		}
	})
}

function ReorganizaAlinea(){
	CapturaAlineas();

	alineas.map((element, index, array) => {
		$(`alinea:eq(${index})`).text() == "" ? $(`alinea:eq(${index})`).remove() : '';
		alineaAlfabeto += 1;
		if (element.artigo == array[index + 1]?.artigo) {
			$(`alinea:eq(${index})`).text(`${String.fromCharCode(alineaAlfabeto + 64)}) `)
		} else {
			if (element.artigo == array[index - 1]?.artigo) {
				$(`alinea:eq(${index})`).text(`${String.fromCharCode(alineaAlfabeto + 64)}) `)
				alineaAlfabeto = 32;
			} else {
				$(`alinea:eq(${index})`).text(`${String.fromCharCode(33 + 64)}) `);
				alineaAlfabeto = 32;
			}
		}
	})
}


function ReorganizaItem(){
	CapturaItens();
	let indiceItem = 0;

	itens.map((element, index, array) => {
		$(`item:eq(${index})`).text() == "" ? $(`item:eq(${index})`).remove() : '';
		if (element.artigo == array[index + 1]?.artigo) {
			$(`item:eq(${index})`).text(`${indiceItem += 1}. `)
		} else {
			if (element.artigo == array[index - 1]?.artigo) {
				$(`item:eq(${index})`).text(`${indiceItem += 1}. `)
				indiceItem = 0;
			} else {
				$(`item:eq(${index})`).text(`${indiceItem += 1}. `);
				indiceItem = 0;
			}
		}
	})
}


