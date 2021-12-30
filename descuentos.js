function calcularDescuento(precio, descuento) {
    return (precio * (100 - descuento) / 100);
}

function calcDescuento() {
    const inputPrecio = document.getElementById("ImputPrecio");
    const inputDescuento = document.getElementById("InputDescuento");
    const valorPrecio = inputPrecio.value;
    const valorDescuento = inputDescuento.value;
    const descuento = calcularDescuento(valorPrecio, valorDescuento);
    const resultadoDescuento = document.getElementById("ResultadoDescuento");
    resultadoDescuento.innerText = "El precio del descuento es de: $" + descuento;
}

function calcDescuentoConCupon(precio, descuento, cupo) {
    const descMasCupo = descuento + cupo;
    return calcularDescuento(precio, descMasCupo);
}



const cuponesOferta = [
    {
        Nombre: "Gran oferta",
        ExpiraEn: 4 + " dias",
        Descuento: 25,
        Cantidad: 1,
        Categoria: "Todos los productos",
    },
    {
        Nombre: "ElectroViernes",
        ExpiraEn: 15 + " dias",
        Descuento: 30,
        Cantidad: 2,
        Categoria: "Electrodomesticos",
    },
    {
        Nombre: "VeraOferta",
        ExpiraEn: 2 + " dias",
        Descuento: 20,
        Categoria: "Celulares",
    },
    {
        Nombre: "Mega Oferton",
        ExpiraEn: 9 + " dias",
        Descuento: 15,
        Categoria: "Todos los productos",
    },
    {
        Nombre: "Tiempos de Tecno",
        ExpiraEn: 5 + " dias",
        Descuento: 35,
        Categoria: "Celulares",
    },
    {
        Nombre: "Mini Black games",
        ExpiraEn: 0 + " dias",
        Descuento: 25,
        Categoria: "Juegos",
    },
    {
        Nombre: "BARATECNO!!",
        ExpiraEn: 10 + " dias",
        Descuento: 50,
        Categoria: "Ropa",
    }

];
/*
const ProductosEnOferta = [
    {
        Nombre: "Tele",
        Precio: 1000 + " $",
        Categoria: "Electrodomesticos",
    },
    {
        Nombre: "Tostadora",
        Precio: 250 + " $",
        Categoria: "Electrodomesticos",
    },
    {
        Nombre: "Licuadora",
        Precio: 150 + " $",
        Categoria: "Electrodomesticos",
    },
    {
        Nombre: "Aspiradora",
        Precio: 450 + " $",
        Categoria: "Electrodomesticos",
    },
    {
        Nombre: "Jean",
        Precio: 75 + " $",
        Categoria: "Ropa",
    },
    {
        Nombre: "Camisa",
        Precio: 65 + " $",
        Categoria: "Ropa",
    },
    {
        Nombre: "Poleron",
        Precio: 70 + " $",
        Categoria: "Ropa",
    },
    {
        Nombre: "Tenis Jordan",
        Precio: 850 + " $",
        Categoria: "Ropa",
    },
    {
        Nombre: "Tele",
        Precio: 200 + " $",
        Categoria: "Juegos",
    },
    {
        Nombre: "PS4",
        Precio: 1300 + " $",
        Categoria: "Juegos",
    },
    {
        Nombre: "Nintendo switch",
        Precio: 600 + " $",
        Categoria: "Juegos",
    },
    {
        Nombre: "PS3",
        Precio: 750 + " $",
        Categoria: "Juegos",
    },
    {
        Nombre: "Computadora gamer",
        Precio: 2500 + " $",
        Categoria: "Aparatos Electronicos",
    },
    {
        Nombre: "Laptop gamer",
        Precio: 2200 + " $",
        Categoria: "Aparatos Electronicos",
    },
    {
        Nombre: "Samsumg S21",
        Precio: 2500 + " $",
        Categoria: "Aparatos Electronicos",
    },
    {
        Nombre: "Camara",
        Precio: 1000 + " $",
        Categoria: "Aparatos Electronicos",
    }
];
const existeProducto = function (producto) {
    return producto.nombre === productoExiste;
}
const verificarProducto = ProductosEnOferta.find(existeProducto);
//Todos los productos, Aparatos Electronicos, Juegos, Ropa,Electrodomesticos
*/





function ObtenerDescuentoMasCupon() {
    const precioProducto = document.getElementById("precioProducto");
    const valorProducto = precioProducto.value;
    const descuentoCupon = document.getElementById("descuentoMiProducto");
    const valorCupon = descuentoCupon.value;


    const esCuponValido = function (cupon) {
        return cupon.Nombre === valorCupon;
    };
    const cuponUsuario = cuponesOferta.find(esCuponValido);


    if (!cuponUsuario) {
        alert("El cupon quiso añadir no es valido");
    } else {
        const descuento = cuponUsuario.Descuento;
        const precioConCupon = calcularDescuento(valorProducto, descuento);
        const cantidadDescuento = document.getElementById("CantDescuento");
        cantidadDescuento.innerText = "El descuento del cupon del producto es de: "+ descuento +"%"
        const respDescuentoCupon = document.getElementById("ResultadoCuponDescuento");
        respDescuentoCupon.innerText = "El precio con el cupon aplicado es de:" + precioConCupon + "$";
    }
}

