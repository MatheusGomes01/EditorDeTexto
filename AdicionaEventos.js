let titulo = 0;
let capitulo = 0;
let secao = 0;
let artigo = 0;
let paragrafo = 0;
let inciso = 0;
let alinea = 0;
let alineaAlfabeto = 32;
let item = 0;



let titulos = [];
let capitulos = [];
let secoes = [];
let artigos = [];
let paragrafos = [];
let incisos = [];
let alineas = [];
let itens = [];


function adicionaEvento(value) {
	var selection = window.getSelection();
	for (var i = 0; i < 0; i += 1) {
		selection.modify('extend', 'backward', 'character');
	}

	debugger;
	document.execCommand('insertHTML', false, VerificaTipoDeEvento(value));
	ReorganizacaoGeral();
	$('#contextMenu').hide()
}

function VerificaTipoDeEvento(value){
	switch(value){
		case 'titulo':
			return EventoDeTitulo();
			break;
		case 'capitulo':
			return EventoDeCapitulo();
			break;
		case 'secao':
			return EventoDeSecao();
			break;
		case 'artigo':
			return EventoDeArtigo();
			break;
		case 'paragrafo':
			return EventoDeParagrafo();
			break;
		case 'inciso':
			return EventoDeInciso();
			break;
		case 'alinea':
			return EventoDeAlinea();
			break;
		case 'item':
			return EventoDeItem();
			break;

	}
}