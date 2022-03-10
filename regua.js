

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

function entradaDeSliderFirst(elementClicked)
{  
  elementClicked.value=Math.min(elementClicked.value,elementClicked.parentNode.childNodes[5].value-1);
  let value = (elementClicked.value/parseInt(elementClicked.max))*100
  var children = elementClicked.parentNode.childNodes[1].childNodes;
  children[1].style.width=value+'%';
  children[5].style.left=value+'%';
  children[7].style.left=value+'%';

  document.querySelector('#fake_textarea').style.paddingLeft = (value + "%");

}

function entradaDeSliderLast(elementClicked)
{  
    elementClicked.value=Math.max(elementClicked.value,elementClicked.parentNode.childNodes[3].value-(-1));
    let value = (elementClicked.value/parseInt(elementClicked.max))*100
    var children = elementClicked.parentNode.childNodes[1].childNodes;
    children[3].style.width=(100-value)+'%';
    children[5].style.right=(100-value)+'%';
    children[9].style.left=value+'%';

    document.querySelector('#fake_textarea').style.paddingRight = ((100 - value) + "%");

}

// outro
var inputElementSlidefirst = document.querySelectorAll('input[type="range"][class=first]')[0]
inputElementSlidefirst.addEventListener("input", (e) => {  entradaDeSliderFirst(e.target); });

var inputElementSlidelast = document.querySelectorAll('input[type="range"][class=last]')[0]
inputElementSlidelast.addEventListener("input", (e) => {  entradaDeSliderLast(e.target); });



