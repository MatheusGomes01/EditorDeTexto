function TemplateTagTitulo(value){
	return `<titulo contenteditable="false" class="dispotivo-titulo">Titulo ${value}&zwnj;</titulo><div class="paragrafos">&zwnj;</div>`
}

function TemplateTagCapitulo(value){
	return `<capitulo contenteditable="false" class="dispotivo-capitulo">Capítulo ${value}&zwnj;</capitulo><div class="paragrafos">&zwnj;</div>`
}

function TemplateTagSecao(value){
	return `<secao contenteditable="false" class="dispotivo-secao">Seção ${value}&zwnj;</secao><div class="paragrafos">&zwnj;</div>`
}

function TemplateTagArtigo(value){
	return `<artigo contenteditable="false" class="dispotivo-artigo">Art. ${value} ${value <= 9 ? '° ' : ''}</artigo>&zwnj;&nbsp;`
}

function TemplateTagParagrafo(value){
	return `<paragrafo contenteditable="false" class="dispotivo-paragrafo">${verificaParagrafo(value)}</paragrafo>&zwnj;&nbsp;`
}

function TemplateTagInciso(value){
	return `<inciso contenteditable="false" class="dispotivo-inciso">${value} -</inciso>&zwnj;&nbsp;`
}

function TemplateTagAlinea(value){
	return `<alinea contenteditable="false" class="dispotivo-alinea">${String.fromCharCode(value + 64)})</alinea>&zwnj;&nbsp;`
}

function TemplateTagItem(value){
	return `<item contenteditable="false" class="dispotivo-item">${item}.</item>&zwnj;&nbsp;`
}



function TemplateDeTagTituloCustomizado(value){
	return `<tituloCustomizado class="dispotivo-titulo-customizado">${value}</tituloCustomizado>&nbsp;<div class="paragrafos">&zwnj;</div>`
}

function TemplateDeTagCapituloCustomizado(value){
	return `<capituloCustomizado class="dispotivo-capitulo-customizado">${value}</capituloCustomizado>&nbsp;<div class="paragrafos">&zwnj;</div>`
}

function TemplateDeTagSecaoCustomizado(value){
	return `<secaoCustomizado class="dispotivo-secao-customizado">${value}</secaoCustomizado>&nbsp;<div class="paragrafos">&zwnj;</div>`
}

function TemplateDeTagArtigoCustomizado(artigo, value){
	return `<artigo contenteditable="false" class="dispotivo-artigo">Art. ${artigo} ${artigo <= 9 ? '° ' : ''}</artigo>&zwnj;&nbsp;${value}`
}

function TemplateDeTagParagrafoCustomizado(paragrafo,value){
	return `<paragrafo contenteditable="false" class="dispotivo-paragrafo">${verificaParagrafo(paragrafo)}</paragrafo>&zwnj;&nbsp;${value}`
} 

function TemplateDeTagIncisoCustomizado(inciso, value){
	return `<inciso contenteditable="false" class="dispotivo-inciso">${inciso} -</inciso>&zwnj;&nbsp;${value}`
} 

function TemplateDeTagAlineaCustomizado(alinea, value){
	return `<alinea contenteditable="false" class="dispotivo-alinea">${String.fromCharCode(alinea + 64)})</alinea>&zwnj;&nbsp;${value}`
} 

function TemplateDeTagItemCustomizado(value){
	return `<item contenteditable="false" class="dispotivo-item">${item}.</item>&zwnj;&nbsp;${value}`
} 


function verificaParagrafo(val){
	
	if (val >= 1 && val <= 9) {
		return `§ ${val}° `
	} else {
		return `§ ${val} `
	}
}

function romanize(num) {
	if (isNaN(num))
		return NaN;
	var digits = String(+num).split(""),
	key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
	roman = "",
	i = 3;
	while (i--) {
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	}
	return Array(+digits.join("") + 1).join("M") + roman;
}

function roman_to_Int(str1) {
	if(str1 == null) return -1;
	var num = char_to_int(str1.charAt(0));
	var pre, curr;

	for(var i = 1; i < str1.length; i++){
		curr = char_to_int(str1.charAt(i));
		pre = char_to_int(str1.charAt(i-1));
		if(curr <= pre){
			num += curr;
		} else {
			num = num - pre*2 + curr;
		}
	}

	return num;
}

function char_to_int(c){
	switch (c){
		case 'I': return 1;
		case 'V': return 5;
		case 'X': return 10;
		case 'L': return 50;
		case 'C': return 100;
		case 'D': return 500;
		case 'M': return 1000;
		default: return -1;
	}
}