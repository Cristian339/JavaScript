//Codigo cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();



// codigo triangulo
console.group("Triangulos");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTrianguloLadosIguales(lado) {
    return (lado * lado) / 2;
}
function perTrianguloLadosIguales(lado) {
    return lado * 3;
}
console.groupEnd();


//Codigo circunferencia
console.group("Circulos");
const radioCirculo = 4;
const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}
function perimetroCirculoConDiametro(diametro) {
    return diametro * Math.PI;
}
function perimetroCirculoConRadio(radio) {
    return 2 * radio * Math.PI;
}
console.groupEnd();

function calcAlturaIsosceles(ladoDiferente, ladoIgual1, ladoIgual2) {
    if (ladoIgual1 === ladoIgual2 && ladoIgual1 != ladoDiferente && ladoIgual2 != ladoDiferente) {
        return Math.sqrt(Math.pow(ladoDiferente, 2) - (ladoIgual1 * ladoIgual2));

    } else {
        return "La base o los lados tiene que ser iguales";
    }
}




function calcularPerimetro() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularArea() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTri() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perTri = areaTrianguloLadosIguales(value);
    alert(perTri);
}
function calcularPerimetroTri() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const areaTri = perTrianguloLadosIguales(value);
    alert(areaTri);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const areaCir = areaCirculo(value);
    alert(areaCir);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perCirculo = perimetroCirculoConRadio(value);
    alert(perCirculo);
}



function calcularAlturaIsosceles() {
    const input = document.getElementById("InputLadoDif");
    const input2 = document.getElementById("InputLadoIg1");
    const input3 = document.getElementById("InputLadoIg2");
    const value = input.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const alturaIsos = calcAlturaIsosceles(value, value2, value3);
    alert(alturaIsos);

}


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}