// =======================
//  -URL BASE DE LA API
// =======================
const API_URL = "http://localhost:3000/productos";

// =======================
//  -LEER PRODUCTOS (GET)
// =======================
function obtenerProductos () {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => console.log('Productos disponibles:', data))
      .catch(error => console.error('Error al obtener productos:', error));
}

// =======================
//  -CREAR NUEVO PRODUCTO (POST)
// =======================
function crearProducto (producto) {
    if (!producto.nombre || typeof producto.precio !== 'number') {
        console.error ('Datos invalidos para crear producto.');
        return;
    }

    fetch (API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/jspon'
        },
        body: JSON.stringify(producto)
    })

    .then(response => response.json())
    .then(data => console.log('Producto agregado:', data))
    .catch(error => console.error('Error al crear producto:', error));
}

// =======================
//  -ACTUALIZAR PRODUCTO (PUT)
// =======================
function actualizarProducto (id, datosActualizados) {
    if (!datosActualizados.nombre || typeof datosActualizados.precio !== 'number') {
        console.error('Datos invalidos para actualizar producto.');
        return;
    }

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/jspon'
        },
        body: JSON.stringify(datosActualizados)
    })

    .then(response => response.json())
    .then(data => console.log('Producto actualizado:', data))
    .catch(error => console.error('Error al actualizar producto:', error));
}

// =======================
//  -ELIMINAR PRODUCTO (DELETE)
// =======================
function eliminarProducto (id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })

    .then(() => console.log('Producto eliminado'))
    .catch(error => console.error('Error al eliminar producto:', error));
}

// =======================
//  -EJECUTAR TODAS LAS OPERACIONES
// =======================
function ejecutarGestion () {
    obtenerProductos(); //SE muestra todos los productos iniciales

    setTimeout(() => {
        crearProducto({nombre: 'Monitor', precio: 400});
    }, 1000);

    setTimeout(() => {
        actualizarProducto(1, {nombre: 'laptop', precio: 1150});
    }, 2000);

    setTimeout(() => {
        eliminarProducto(2); //Se elimina el Mouse
    }, 3000)

    setTimeout (() => {
        obtenerProductos() //Se muestra los productos actualizados
    }, 4000)
}

ejecutarGestion();