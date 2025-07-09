# Autor
    Nombre: Juan Manuel Arango Arana
    Clan: Van Rossum

# Link repositorio GitHub
    https://github.com/BioHazard23/Interacci-n-con-Servidores-y-Consumo-de-APIs

# Interacción con Servidores y Consumo de APIs
    Este proyecto consiste en una implementacion de un CRUD, utilizando JavaScript, Fetch API y un servidor en este caso JSON Server.

# Estructura del proyecto
    Interacción con Servidores y Consumo de APIs
    |
    |---db.json            //Base de datos.
    |
    |--Gestion_api.js      //Codigo principal.

# Instalacion y configuracion
    - Descarga este archivo.

    - Instala JSON Server de manera global con el siguiente comando:
        npm install -g json-server

    - Verifica que se alla instalado correctamente con el siguiente comando:
        json-server --version 

    - Inicia el servidor para que se pueda ejecutar el archivo db.js con el siguiente comando:
        json-server --watch db.json

    Esto lo que permite es que se ejecute el archivo en "LocalHost"

# ¿Que hace cada funcion?
    - obtenerProductos() = Muestra todos los productos disponibles.
    - crearProducto() = Agrega un nuevo producto.
    - actualizarProducto(id, datosActualizados) = Modifica el producto por ID.
    - eliminarProducto(id) = Elimina un producto por ID.
    - ejecutarGestion() = Ejecuta las operaciones anteriores en orden.

# Ejecutar Proyecto
    - En una terminal inicia JSON Server con el siguiente comando:
        json-server --watch db.json

    - En otra terminal ejecuta el archivo JS con el siguiente comando:
        node Gestion_api.js
    
    Revisa la consola para ver los resultados de las operaciones CRUD

# Resultado esperado
    Productos disponibles: [
      { id: '1', nombre: 'Laptop', precio: 1250 },
      { id: '2', nombre: 'Mouse', precio: 325 },
      { id: '3', nombre: 'Teclado', precio: 275 }
    ]
    Producto agregado: { id: '207b', nombre: 'Monitor', precio: 400 }
    Producto actualizado: { nombre: 'laptop', precio: 1150, id: '1' }
    Producto eliminado
    Productos disponibles: [
      { nombre: 'laptop', precio: 1150, id: '1' },
      { id: '3', nombre: 'Teclado', precio: 275 },
      { id: '207b', nombre: 'Monitor', precio: 400 }
    ]