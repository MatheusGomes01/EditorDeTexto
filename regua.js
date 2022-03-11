

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

var desenho = document.querySelector("#desenho");
desenho.appendChild(escala_numerica);


/*slier que esta em stackoverflow */ 

function entradaDeSliderFirst(elementClicked)
{  

  let avanco = false;
   if( parseInt(document.querySelector('#thumbright').style.left) < elementClicked.value )
   {
      avanco = true;
   };

  console.log(document.querySelector('#thumbright').style.left.replace("%", ''));
  console.log(elementClicked.value);

  let value = (elementClicked.value/parseInt(elementClicked.max))*100;

    document.querySelector('#inverse-left-margin').style.width=value+'%';
    document.querySelector('#range-margin').style.left=value+'%';
    document.querySelector('#thumbright').style.left=value+'%';

    document.querySelector('#fake_textarea').style.paddingLeft = (value + "%");
  

    var cursor_paragrafo = document.querySelector("#paragrafFirstCursor");

  
    if(cursor_paragrafo.value > elementClicked.value -1)
    {
      if(avanco)
      {

        AvancoDeCursorPosterior(elementClicked);

      }else {
        
        RetrocessoDeCursorPosterior(elementClicked);
      }
     
    }else{

        AcompanhamentoDeCursor(elementClicked);

    }
  
}

function entradaDeSliderParagraf(elementClicked)
{
  if(elementClicked.value >= parseInt(document.querySelector('#thumbright').style.left))
  {
    AcompanhamentoDeCursor(elementClicked);

  }else{

      return 
  }
}

var AvancoDeCursorPosterior = (elementClicked) => {

  let value = $('#paragrafFirstCursor').val();
  let interado = parseInt(value) + 1;
  $(`#inverse-left-paragrafo`).css('width', `${interado}%`);
  $(`#rage-paragrafo`).css('left', `${interado }%`);
  $(`#paragrafoInicial`).css('left', `${interado }%`);
  $('#paragrafFirstCursor').val(interado);
};

var RetrocessoDeCursorPosterior = (elementClicked) => {

  let value = $('#paragrafFirstCursor').val();
  let interado = parseInt(value) - 1;
  $(`#inverse-left-paragrafo`).css('width', `${interado}%`);
  $(`#rage-paragrafo`).css('left', `${interado }%`);
  $(`#paragrafoInicial`).css('left', `${interado }%`);
  $('#paragrafFirstCursor').val(interado);
};

var AcompanhamentoDeCursor = (elementClicked) => {
  let value = (elementClicked.value/parseInt(elementClicked.max))*100;
  $(`#inverse-left-paragrafo`).css('width', `${value}%`);
  $(`#rage-paragrafo`).css('left', `${value}%`);
  $(`#paragrafoInicial`).css('left', `${value}%`);
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
  event.preventDefault();

  entradaDeSliderFirst(event.target);
});

$('#lastCursosRule').on('input', function(event) {
  event.preventDefault();

  entradaDeSliderLast(event.target, true);
});


// para os cursores de paragrafo 

$('#paragrafFirstCursor').on('input', function(event) {
  event.preventDefault();
  entradaDeSliderParagraf(event.target);

});

$('#paragrafLastCursor').on('input', function(event) {
  event.preventDefault();

  entradaDeSliderLast(event.target, false);
});