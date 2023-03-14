// Creando el menú de hamburguesa 

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})

function eventListeners(){
    const responsive = document.querySelector('.navegacion-responsive');
    responsive.addEventListener('click', navegacionResponsive);
}

// Creando una funcion para que dar click el menú se muestre o no se muestre.
function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion-principal');
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}

// Incremento y Decremento
const incremento = document.querySelector('.mas');
const n = document.querySelector('.numero');
const decremento = document.querySelector('.menos');

let a = 1;

incremento.addEventListener('click', function() {
    if( a < 15 ){
        a++;
        n.innerText = a;
    }
})

decremento.addEventListener('click', function() {
    if( a > 1 ){
        a--;
        n.innerText = a;
    }
})

// Alerta
function agregarAlerta(){
    alert('Antes de agregar el producto, seleccione la talla y la cantidad de articulos');
}

function pulsar(){
    const seleccionar = document.querySelector('.tallas');
    const talla = seleccionar.value;

    document.querySelector('#talla-seleccionada').innerHTML = `Has seleccionado la talla ${talla}`
}

// Buscador
function buscar(){
    const buscar = document.querySelector('.input-search').value;
    if( buscar === 'sección de mujer'){
        panel.innerHTML = '9 productos encontrados';
    }

    if( buscar === 'sección de hombre'){
        panel.innerHTML = '9 productos encontrados';
    }

    if( buscar === 'sección infantil'){
        panel.innerHTML = '9 productos encontrados';
    }

    if( buscar === 'sección de calzado'){
        panel.innerHTML = '9 productos encontrados';
    }

    if( buscar === 'salud y belleza'){
        panel.innerHTML = '9 productos encontrados';
    }

    if( buscar === 'accesorios'){
        panel.innerHTML = '9 productos encontrados';
    }

    setTimeout(() => {
        panel.remove();
    }, 3000);
}
