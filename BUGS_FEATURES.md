# Taller: Consumo de APIs con React.js
## Explorador de Países

---

## Bugs

### Bug 1: Búsqueda por nombre

La barra de búsqueda no funciona correctamente al escribir en minúsculas.

**Pasos para reproducir:**
1. Abre la aplicación.
2. Escribe `colombia` (en minúsculas) en la barra de búsqueda.
3. Observa que no aparece ningún resultado, a pesar de que el país existe.
4. Ahora escribe `Colombia` con la primera letra en mayúscula.
5. Observa que ahora sí aparece correctamente.

---

### Bug 2: Búsqueda combinada con filtro de región

Cuando se usan la búsqueda y el filtro de región al mismo tiempo, solo uno de los dos tiene efecto.

**Pasos para reproducir:**
1. Selecciona la región `Americas` en el filtro desplegable.
2. Verifica que la lista muestra solo países de esa región.
3. Sin quitar el filtro, escribe `col` en la barra de búsqueda.
4. Observa que el filtro de región ya no aplica y aparecen resultados de todas las regiones.

---

### Bug 3: Idiomas en el detalle del país

Al abrir el detalle de cualquier país, el campo de idiomas no muestra la información correcta.

**Pasos para reproducir:**
1. Haz clic sobre cualquier tarjeta de país.
2. En el modal que aparece, ubica el campo **Idiomas**.
3. Observa que en lugar del nombre de los idiomas, aparece el texto `[object Object]`.

---

## Features

### Feature 1: Filtro por rango de población

**Como** usuario de la aplicación,  
**quiero** poder ingresar un valor mínimo y un valor máximo de población,  
**para** ver únicamente los países cuya población esté dentro de ese rango.

**Criterios de aceptación:**
- Existen dos campos de entrada numéricos: uno para la población mínima y otro para la máxima.
- Al escribir en cualquiera de los campos, la lista de países se actualiza en tiempo real.
- Si ambos campos están vacíos, se muestran todos los países sin restricción.
- El filtro de población funciona en conjunto con la búsqueda por nombre y el filtro de región.

---

### Feature 2: Paginación

**Como** usuario de la aplicación,  
**quiero** que los países se muestren en páginas de 12 resultados,  
**para** no tener que desplazarme por una lista demasiado larga.

**Criterios de aceptación:**
- Solo se muestran 12 países a la vez.
- Existen botones de Anterior y Siguiente para navegar entre páginas.
- Se indica en qué página se encuentra el usuario y cuántas páginas hay en total.
- El botón Anterior está deshabilitado cuando se está en la primera página.
- El botón Siguiente está deshabilitado cuando se está en la última página.

---

### Feature 3: Ordenamiento

**Como** usuario de la aplicación,  
**quiero** poder ordenar la lista de países por nombre o por población,  
**para** encontrar más fácilmente la información que busco.

**Criterios de aceptación:**
- Es posible elegir entre ordenar por nombre o por población.
- Es posible alternar entre orden ascendente y descendente.
- El ordenamiento se aplica sobre los resultados ya filtrados.
- Se indica visualmente qué criterio de ordenamiento está activo.