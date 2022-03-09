function EventoDeTitulo(){
	titulo = parseInt(titulo);
	titulo += 1;
	titulos.push({artigo, titulo});
	return TemplateTagTitulo(romanize(titulo));
}

function EventoFormatarComoTitulo(value){
	titulosCustomizados.push({titulo : titulosCustomizados});
	return TemplateDeTagTituloCustomizado(value);
}

function EventoDeCapitulo(){
	capitulo = parseInt(capitulo);
	capitulo += 1;
	capitulos.push({artigo, capitulo});
	return TemplateTagCapitulo(romanize(capitulo));
}

function EventoDeSecao(){
	secao = parseInt(secao);
	secao += 1;
	secoes.push({artigo, secao});
	return TemplateTagSecao(romanize(secao))

}

function EventoDeArtigo(){
	artigo = parseInt(artigo);

	artigo += 1;
	titulo = 0;
	capitulo = 0;
	secao = 0;
	paragrafo = 0;
	inciso = 0;
	alinea = 0;
	alineaAlfabeto = 32;
	item = 0;

	artigos.push(artigo);
	return TemplateTagArtigo(artigo);
}

function EventoDeParagrafo(){
	paragrafo = parseInt(paragrafo);
	paragrafo += 1;
	return TemplateTagParagrafo(paragrafo);
}

function EventoDeInciso(){
	inciso = parseInt(inciso);
	inciso += 1 ;
	incisos.push({artigo, inciso});
	return TemplateTagInciso(romanize(inciso));
}

function EventoDeAlinea(){
	alinea = parseInt(alinea);
	alinea += 1 ;
	alineaAlfabeto += 1;
	alineas.push({artigo, alinea})
	return TemplateTagAlinea(alinea);
}

function EventoDeItem(){
	item = parseInt(item);
	item += 1 ;
	itens.push({artigo, item})
	return TemplateTagItem(item);
}

