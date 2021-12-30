const salariosBol = bolivia.map(
    function (persona) {
        return persona.salario;
    });

salariosListaOrdenada = salariosBol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }

);

function medianaSalarios(lista) {
    if ((lista.length % 2) == 1) {
        posProm = parseInt((lista.length - 1) / 2);
        return promedio = lista[posProm];
    } else {
        posProm = parseInt((lista.length - 1) / 2);

        return promedio = (parseInt(lista[posProm]) + parseInt(lista[posProm + 1])) / 2;
    }
}



//mediana general
const medianaGeneralBol = medianaSalarios(salariosListaOrdenada);
//mediana top 10 % 
const inicio = (salariosListaOrdenada.length * 90) / 100;
const final = salariosListaOrdenada.length - inicio;
const salariosTop10 = salariosListaOrdenada.splice(inicio, final);

const medianaTop10 = medianaSalarios(salariosTop10);


console.log({
    medianaGeneralBol,
    medianaTop10
});