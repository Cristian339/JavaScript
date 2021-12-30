const listaPromedioGanancias = [
    300,
    800,
    550,
    750,
    1350,
    985,
];
const listaUsuario = [

];
// se puede utilizar tambien el metodo del array llamado .reduce
function CalcularPromedio(lista) {

    const sumaTotal = lista.reduce(
        function (sumaTotal = 0, nuevoElemento) {
            return parseInt(sumaTotal) + parseInt(nuevoElemento);
        }

    );
    let promedioLista = sumaTotal / lista.length;
    return promedioLista;
}
function agregarValor(valor) {
    listaUsuario.push(valor);
    listaUsuario.sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
}


function agregarElemento() {
    const inputElemento = document.getElementById("AgregarValor");
    const inputTexto = document.getElementById("valorAniadido")
    const valorElemento = inputElemento.value;
    const aniadirValor = agregarValor(valorElemento);
    inputTexto.innerText = "Se ha agregado correctamente el valor: " + valorElemento;
}
function calcPromdio() {
    const promedioTotal = CalcularPromedio(listaUsuario)
    const imputPromTotal = document.getElementById("ResultProm");
    ResultProm.innerText = "El promedio total es de: " + promedioTotal;
}



const listUsuarioMedia = [

];

function agregarValorMedia(valor) {

    listUsuarioMedia.push(valor);
    listUsuarioMedia.sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
}

function calcularMediana(lista) {
    if ((listUsuarioMedia.length % 2) == 1) {
        posProm = parseInt((listUsuarioMedia.length - 1) / 2);
        return promedio = listUsuarioMedia[posProm];
    } else {
        posProm = parseInt((listUsuarioMedia.length - 1) / 2);

        return promedio = (parseInt(listUsuarioMedia[posProm]) + parseInt(listUsuarioMedia[posProm + 1])) / 2;
    }
}


function añadirVal() {
    const inputValor = document.getElementById("valorElemento");
    const textoValor = document.getElementById("impValorAgreg");
    const valorElemento = inputValor.value;
    const agregarValor = agregarValorMedia(valorElemento);
    textoValor.innerText = "Se ha agregado correctamente a tu lista el valor: " + valorElemento;
}

function calcMediana() {
    textoMedia = document.getElementById("impValorAgreg");
    medianaResult = calcularMediana(listUsuarioMedia);
    textoMedia.innerText = "El valor de la Mediana es de: " + medianaResult;
}

function agregarValor(elemento) {
    usuarioListaModa.push(elemento);
}

const usuarioListaModa = [];
const listaConteo = {

};




function obtenerModa() {

    usuarioListaModa.map(
        function (elemento) {
            console.log("entre");
            if (listaConteo[elemento]) {
                listaConteo[elemento] += 1;
            } else {
                listaConteo[elemento] = 1;
            }
        }

    )

    const arrayOrdenado = Object.entries(listaConteo).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    const respuesta = "El elemento que mas se repitio es " + arrayOrdenado[arrayOrdenado.length - 1][0] + " en el cual se ha repetido " + arrayOrdenado[arrayOrdenado.length - 1][1] + " veces";
    return respuesta;
}



function agregValorModa() {
    const inputElemento = document.getElementById("entradaMod");
    const valorElemento = inputElemento.value;
    const agregValor = agregarValor(valorElemento);
    const inputValor = document.getElementById("inputModa");
    inputValor.innerText = "Se ha agregado correctamente el valor: " + valorElemento;


}
function calcModa() {

    const inputResp = document.getElementById("inputResult");
    const resultModa = obtenerModa();
    inputResp.innerText = resultModa;

}


const listaGeom = [];



function agregarValorMediaGeom(elemento) {
    listaGeom.push(elemento);
}
function obtenerMediaGeometrica() {
    const multTotal = listaGeom.reduce(
        function (multTotal = 0, nuevoElemento) {
            return parseInt(multTotal) * parseInt(nuevoElemento);
        }

    );
    const resultado = Math.pow(multTotal, 1 / (listaGeom.length));
    return resultado;
}


function agregarValor() {
    const inputValGeom = document.getElementById("aniadirVal");
    const inputTextoValor = document.getElementById("inputValorGeom");
    const valorElementoGeom = inputValGeom.value;
    const agregValorMediaGeom = agregarValorMediaGeom(valorElementoGeom);
    inputTextoValor.innerText = "Se ha agregado correctamente el valor: " + valorElementoGeom;

}
function calcMediaGeom() {

    const inputTextResult = document.getElementById("inputResultGeom");
    const resultMediaGeo = obtenerMediaGeometrica();
    inputTextResult.innerText = "El resultado del la media geometrica es de: " + resultMediaGeo;

}