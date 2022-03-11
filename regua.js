

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
  debugger
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
    const cursor_paragrafo = document.querySelector('#paragrafFirstCursor');
// logica de seguir cursor 
    if(cursor_paragrafo.value < elementClicked.value)
    {

      
    }
    
  }
}

var setValueQuery = (valor) => 
{
   document.querySelector('#paragrafFirstCursor').value = valor;
   this
};

var AcompanhamentoDeCursor = (elementClicked) => {

  elementClicked.value=Math.min(elementClicked.value,elementClicked.parentNode.childNodes[5].value-1);
  let value = (elementClicked.value/parseInt(elementClicked.max))*100
  var children = elementClicked.parentNode.childNodes[1].childNodes;
  children[1].style.width=value+'%';
  children[5].style.left=value+'%';
  children[7].style.left=value+'%';
};

function entradaDeSliderLast(elementClicked, isParagrafo)
{  
  debugger
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

// outro
var inputElementSlidefirst = document.querySelectorAll('input[type="range"][id=firstCursorRule]')[0]
inputElementSlidefirst.addEventListener("input", (e) => {  entradaDeSliderFirst(e.target, true); });

var inputElementSlidelast = document.querySelectorAll('input[type="range"][id=lastCursosRule]')[0]
inputElementSlidelast.addEventListener("input", (e) => {  entradaDeSliderLast(e.target, true); });

// para os cursores de paragrafo 

var inputElementParagrafoSlidefirst = document.querySelectorAll('input[type="range"][id=paragrafFirstCursor]')[0]
inputElementParagrafoSlidefirst.addEventListener("input", (e) => {  entradaDeSliderFirst(e.target, false); });

var inputElementParagrafoSlidelast = document.querySelectorAll('input[type="range"][id=paragrafLastCursor]')[0]
inputElementParagrafoSlidelast.addEventListener("input", (e) => {  entradaDeSliderLast(e.target, false); });
