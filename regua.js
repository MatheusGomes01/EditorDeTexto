

// esquema para desenho da barra de regua 

var escala_numerica = new DocumentFragment();

for (let index = 0; index < 10; index++) {

  var linha = document.createElement('div');
  linha.className = 'risco-guia-numero';
  linha.innerHTML = index;
  linha.style.gap = '1em';
  escala_numerica.appendChild(linha);
  AdicionaEscalaMenor(escala_numerica);
  AdicionaEscalaMaior(escala_numerica);
  AdicionaEscalaMenor(escala_numerica);

}

function AdicionaEscalaMenor(ofrarmento)
{
   // var escala_menor = new DocumentFragment();

   for (let index = 0; index < 3; index++) {

    var linha = document.createElement('div');
    linha.className = 'risco-guia-menor';
    linha.style.borderLeft = '1px solid black';
    linha.style.gap = '1em';
    ofrarmento.appendChild(linha);
  }
}

function AdicionaEscalaMaior(ofrarmento)
{
  var linha = document.createElement('div');
  linha.className = 'risco-guia-menor';
  linha.style.borderLeft = '1px solid black';
  linha.style.paddingTop = '1px';
  linha.style.paddingBottom = '1px';
  linha.style.gap = '1em';
  ofrarmento.appendChild(linha);

}

var desenho = document.querySelectorAll("#desenho")[0];
desenho.appendChild(escala_numerica);


/*slier que esta em stackoverflow */ 

function entradaDeSliderFirst(elementClicked, isParagrafo)
{  
  let cursor_paragrafo = document.querySelector('#paragrafFirstCursor');
  let cursor_normal = document.querySelector('#firstCursorRule');

  let paragrafoInicial = document.querySelector('#paragrafoInicial');
  let cursorInferior = document.querySelector('#thumbright');

  if(elementClicked.id == "paragrafFirstCursor"){    
    let pl = paragrafoInicial.style.left.replace('%', '');
    let cl = cursorInferior.style.left.replace('%', '');

    if (parseInt(pl) < parseInt(cl)) {
      paragrafoInicial.style.left = cursorInferior.style.left;

      return;
    }
  }

  //debugger
  elementClicked.value=Math.min(elementClicked.value,elementClicked.parentNode.childNodes[5].value-1);
  let value = (elementClicked.value/parseInt(elementClicked.max))*100
  var children = elementClicked.parentNode.childNodes[1].childNodes;
  children[1].style.width=value+'%';
  children[5].style.left=value+'%';
  children[7].style.left=value+'%';

  if(isParagrafo)
  {
    document.querySelector('#fake_textarea').style.paddingLeft = (value + "%");
  }

  

  if(elementClicked.id == "firstCursorRule")
  {

    cursor_paragrafo.value = cursor_normal.value;


    if(cursor_paragrafo.value == cursor_normal.value)
    {
      AcompanhamentoDeCursor(elementClicked);
    }

  }
}

var setValueQuery = (valor) => 
{
 document.querySelector('#paragrafFirstCursor').value = valor;
 this
};

var AcompanhamentoDeCursor = (elementClicked) => {


  elementClicked.value = Math.min(elementClicked.value,elementClicked.parentNode.childNodes[5].value-1);
  let value = (elementClicked.value/parseInt(elementClicked.max))*100;

  $(`#inverse-left-paragrafo`).css('width', `${value}%`)
  $(`#paragrafoInicial`).css('left', `${value}%`)
  $(`#rageParagrafo`).css('left', `${value}%`)
  $('#paragrafFirstCursor').val(value);
};

function entradaDeSliderLast(elementClicked, isParagrafo)
{  
  //debugger
  elementClicked.value=Math.max(elementClicked.value,elementClicked.parentNode.childNodes[3].value-(-1));
  let value = (elementClicked.value/parseInt(elementClicked.max))*100
  var children = elementClicked.parentNode.childNodes[1].childNodes;

  children[3].style.width=(100-value)+'%';
  children[5].style.right=(100-value)+'%';
  children[9].style.left=value+'%';

  if(isParagrafo)
  {
    document.querySelector('#fake_textarea').style.paddingRight = ((100 - value) + "%");
  }
}


$('#firstCursorRule').on('input', function(event) {
  entradaDeSliderFirst(event.target, true);
});

$('#lastCursosRule').on('input', function(event) {
  entradaDeSliderLast(event.target, true);
});


// para os cursores de paragrafo 

$('#paragrafFirstCursor').on('input', function(event) {
  entradaDeSliderFirst(event.target, true);
});

$('#paragrafLastCursor').on('input', function(event) {
  entradaDeSliderLast(event.target, true);
});