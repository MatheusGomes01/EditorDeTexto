let titulosCustomizados = [];
let capitulosCustomizados = [];
let secoesCustomizados = [];
let artigosCustomizados = [];
let paragrafosCustomizados = [];
let incisosCustomizados = [];
let alineasCustomizados = [];
let itensCustomizados = [];

var x = '';


function formataEvento(value) {
	let selection = window.getSelection();
	for (let i = 0; i < 0; i += 1) {
		selection.modify('extend', 'backward', 'character');
	}

	document.execCommand('insertHTML', false, VerificaTipoDeEventoFormatado(value, getSelectionHTML()));
	ReorganizacaoGeral();
	$('#contextMenu').hide()
}

function RemoveTextoSelecionado(){
	let selection = window.getSelection();
	for (let i = 0; i < 0; i += 1) {
		selection.modify('extend', 'backward', 'character');
	}

	let texto = selection.anchorNode;

	$('#fake_textarea').html($('#fake_textarea').html().replace(getSelectionHTML(), selection.toString()))
}

function getSelectionHTML() {
	if (typeof window.getSelection != "undefined") {
		var sel = window.getSelection();
		if (sel.rangeCount) {
			var container = document.createElement("div");
			for (var i = 0, len = sel.rangeCount; i < len; ++i) {
				container.appendChild(sel.getRangeAt(i).cloneContents());
			}
			html = container.innerHTML;
		}
	} else if (typeof document.selection != "undefined") {
		if (document.selection.type == "Text") {
			html = document.selection.createRange().htmlText;
		}
	}

	return html
}

function VerificaTipoDeEventoFormatado(value, textoSelecionado){
	switch(value){
		case 'titulo':
		return EventoFormatarComoTitulo(textoSelecionado);
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