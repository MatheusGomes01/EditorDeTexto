
function CapturaTitulos(){
	titulos = [];
	let t = 0; //titulo
	let a = 0; //artigo

	$('#fake_textarea artigo, #fake_textarea titulo').map((index, el) => {
		if(el.nodeName == `ARTIGO`){
			a = el.innerText.replace(/[Art|.|°|\ /]/g, '');
			t = 0;
		}
		
		if(el.nodeName == 'TITULO'){
			t += 1;
			titulos.push({artigo: a, titulo : t})
		}
	})
}

function CapturaCapitulos(){
	capitulos = [];
	let c = 0; //capitulo
	let a = 0; //artigo

	$('#fake_textarea artigo, #fake_textarea capitulo').map((index, el) => {
		if(el.nodeName == `ARTIGO`){
			a = el.innerText.replace(/[Art|.|°|\ /]/g, '');
			c = 0;
		}
		
		if(el.nodeName == 'CAPITULO'){
			c += 1;
			capitulos.push({artigo: a, capitulo : c})
		}
	})
}

function CapturaSecoes(){
	secoes = [];
	let s = 0; //secao
	let a = 0; //artigo

	$('#fake_textarea artigo, #fake_textarea secao').map((index, el) => {
		if(el.nodeName == `ARTIGO`){
			a = el.innerText.replace(/[Art|.|°|\ /]/g, '');
			s = 0;
		}
		
		if(el.nodeName == 'SECAO'){
			s += 1;
			secoes.push({artigo: a, secao : s})
		}
	})
}


function CapturaParagrafos(){
	paragrafos = [];
	let p = 0; //paragrafo
	let a = 0; //artigo

	$('#fake_textarea artigo, #fake_textarea paragrafo').map((index, el) => {
		if(el.nodeName == `ARTIGO`){
			a = el.innerText.replace(/[Art|.|°|\ /]/g, '');
			p = 0;
		}
		
		if(el.nodeName == `PARAGRAFO`){
			p += 1;

			paragrafos.push({artigo: a, paragrafo : p})
		}
	})
}

function CapturaIncisos(){
	incisos = [];
	let i = 0; //inciso
	let a = 0; //artigo

	$('#fake_textarea artigo, #fake_textarea inciso').map((index, el) => {
		if(el.nodeName == `ARTIGO`){
			a = el.innerText.replace(/[Art|.|°|\ /]/g, '');
			i = 0;
		}
		
		if(el.nodeName == `INCISO`){
			i += 1;

			incisos.push({artigo: a, inciso : i})
		}
	})
}

function CapturaAlineas(){
	alineas = [];
	let al = 0; //alinea
	let a = 0; //artigo

	$('#fake_textarea artigo, #fake_textarea alinea').map((index, el) => {
		if(el.nodeName == `ARTIGO`){
			a = el.innerText.replace(/[Art|.|°|\ /]/g, '');
			al = 0;
		}
		
		if(el.nodeName == `ALINEA`){
			al += 1;

			alineas.push({artigo: a, alinea : al})
		}
	})
}

function CapturaItens(){
	itens = [];
	let i = 0; //item
	let a = 0; //artigo

	$('#fake_textarea artigo, #fake_textarea item').map((index, el) => {
		if(el.nodeName == `ARTIGO`){
			a = el.innerText.replace(/[Art|.|°|\ /]/g, '');
			i = 0;
		}
		
		if(el.nodeName == `ITEM`){
			i += 1;

			itens.push({artigo: a, item : i})
		}
	})
}