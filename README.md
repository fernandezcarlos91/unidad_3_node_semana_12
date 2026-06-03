# unidad_3_node_semana_12

# 1.- Crear el proyecto en node
    crear un proyecto con node.js con el comando en la terminal npm init -y

# 1.1.- Cómo descargamos el proyecto de otro lado:
    Vamos a usar el siguiente comando para instalar dependencias de nodeModules

    npm i

# 2.- Instalar Express (para trabajar JavaScrip como servidor)
    Realizar la instalación de un paquete de desarrollo
    npm i express

# 3.- Crear Estructura de Carpetas para el proyecto
    src/ Carpeta madre
    ----app.js Main de la palicación
    ----routes/ Carpeta para definir rutas
    ----middlewares/ Puentes

# 4.- Creación de Logger
        ----middlewares/
            ----logger.js // Creamos el puente de la aplicación

# 5.- Creación de una ruta 
        ----routes/
            ----users.js // Se crea un usuario con daros parseado (meterlos a la mala) en la ruta. La ruta la usaremos para manejar la URL.

# 6.- Creación del Main
    Definimos el cerebro de la aplicación 
    ----app.js 
    
# 7.- Levantamos el servidor con el comando: 
    
    node src/app.js

    recordar que node es palabra reservada, el src es la ubicación de la carpeta y app.js es el main.

# 8.- Verificamos las rutas cambiando el puerto 
    ademas agregamos una constante para reemplazar el número del puerto 

    const PORT = 3002;

# 9.- Agregamos más usuarios en la rutas.
    Para esto creamos un Array con 2 usuarios nuevos en src/routes/users.js

# 10.- Instalación de NodeMon.
    Este paquete hace que no tenganmos que bajar y levantar
    el servidor para validar modificaciones. 
    Se instala con el siguiente comando: 

    npm i -D nodemon

# 11.- Cambiamos el metodo de levantar el servidor
    Ahora estamos ejecuntando un Script, esto es gracias a "nodemon"

    npm rin dev

# 12.- TAREA con 1 decima
    Crear un router llamamo personajes_de_marvel_que_no_salen_en_peliculas_de_marvel.js.js y crear su ruta respectiva 
    en el app.js junto con un Array que contenga 4 elementos con valores {id, nombre, poder, edad_relativa}