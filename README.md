# Administrador de gastos

**Administrador de gastos** Es una aplicación web creada con Vue 3 + vite para llevar un control de presupuesto y gastos.

## Instalación

1. **Asegurate de tener node installado**, lo puedes hacer aquí: [node.org](https://nodejs.org/en/download/package-manager/current)

2. **Clona el repositorio** o descarga los archivos con el código fuente en tu pc.

3. **Instalaciones** Tras descargarlo situate en la carpeta del proyecto, abre un nuevo terminal y ejecuta el comando para instalar lo necesario.
    ````bash
        npm install
    ````

## Uso:

1. **Tras las instalaciones** Lo primero sera abrir de nuevo un terminal en la carpeta del proyect y ejecutar el comando:
    ````bash
        npm run dev
    ````
2. **Acceder al programa** cuando ejecutes el comando anterior se mostrara una url donde está corriendo la aplicación, debes acceder a ella.

3. **Una vez en el programa** debes definir una cantidad valida y pulsar definir presupuesto

4. **Agregando gastos** Tras introducir el presupuesto veras el total, el disponible y lo gastado, no hay gastos todavía. Agrega uno nuevo en el icono en la esquina inferior derecha.

5. **Icono de agregar**, tras pulsarlo se abrira un modal que tendrás que rellenar, se solicitará el nombre del gasto, la cantidad y la categoría tras rellenarlo, pulsar en añadir gasto, se cerrará el modal y tendremos el nuevo gasto en la lista, con su total descontado de disponible y agregado a gastado.

6. **filtrando por tipo**, si tienes varios gastos y solo quiere saber lo gastado en un tipo, por ejemplo comida puedes abrir el desplegable y seleccionar el tipo de gasto correspondiente, se mostraran solo los gastos del tipo elegido.

7. **Editar gasto** Si quiere modificar un gasto busquelo en la lista u haga click sobre su nombre, podrá rellenar de nuevo los distintos campos y modificarlo o borrarlo si es lo que necesita.


Puedes visitar este proyecto online en la siguiente URL para ver su funcionamiento:

[administrador de gastos](https://administrador-gastos-kgs.netlify.app/)

