var display = document.getElementById('display');
var teclas = document.querySelectorAll('[class*=tecla]');
var operadores = document.querySelectorAll('[class*=operador]')

function backspace(){
    if(display.textContent){
        let result = document.getElementById('display').innerHTML
        display.innerHTML = result.substring(0, result.length - 1);
    }
}

teclas.forEach (novoNumero => novoNumero.addEventListener('click',(evento)=> {
    display.textContent += evento.target.textContent;
    console.log('ligou '+ evento.target.textContent); 
}));

operadores.forEach (teclaOperador => teclaOperador.addEventListener('click',(evento)=> {
    display.textContent += evento.target.textContent;
    console.log('ligou '+ evento.target.textContent);
}));

function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

function clean(){
    display.innerHTML = '';
}

function confirma(){
    if(display.textContent != 'Erro') {
        document.getElementById('display').innerHTML = eval
        (display.innerHTML)
        console.log(document.getElementById('display').innerHTML = eval
        (display.innerHTML))
    }

}


    


