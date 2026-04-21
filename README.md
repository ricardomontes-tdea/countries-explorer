# 🌍 Explorador de Países

Aplicación React que consume la API pública [REST Countries](https://restcountries.com/) para mostrar información de todos los países del mundo.

> **Taller:** Consumo de APIs con React.js  
> **Unidad:** Hooks — `useState` y `useEffect`

---

## 🚀 Cómo correr el proyecto

### Requisitos previos
- Node.js ≥ 18
- npm ≥ 9

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/countries-explorer.git
cd countries-explorer

# 2. Instala dependencias
npm install

# 3. Corre el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🗂️ Estructura del proyecto

```
src/
└── components/
    ├── SearchBar.jsx
    ├── RegionFilter.jsx
    ├── CountryCard.jsx
    ├── CountryDetail.jsx
    ├── Pagination.jsx    
    ├── PopulationFilter.jsx
    └── SortControls.jsx
└── styles/
    ├── App.css
    ├── CountryCard.css
    ├── CountryDetail.css
    ├── index.css
    ├── Pagination.css
    ├── PopulationFilter.css
    ├── RegionFilter.css
    ├── SearchBar.css
    └── SortControls.css
└── utils/
    └──getCountries.js
├── CountriesExplorerApp.jsx                  ← Componente principal (lógica central)
└── main.jsx
```

---

## 🌐 API utilizada

**REST Countries v3.1** — `https://restcountries.com/v3.1/`

No requiere API Key. Es pública y gratuita.

### Campos que usa la app

| Campo        | Tipo    | Ejemplo                                  |
|--------------|---------|------------------------------------------|
| `name.common`| string  | `"Colombia"`                             |
| `name.official`| string | `"Republic of Colombia"`                |
| `flags.svg`  | string  | URL de la bandera en SVG                 |
| `population` | number  | `51874024`                               |
| `region`     | string  | `"Americas"`                             |
| `capital`    | array   | `["Bogotá"]`                             |
| `languages`  | object  | `{ spa: "Spanish" }`                     |
| `area`       | number  | `1141748` (km²)                          |

---

## ✅ Funcionalidades actuales

- [x] Listado de todos los países con bandera, región, capital y población
- [x] Búsqueda por nombre *(tiene un bug)*
- [x] Filtro por región *(tiene un bug combinado con la búsqueda)*
- [x] Modal de detalle al hacer clic en un país *(tiene un bug en idiomas)*
- [x] Botón de favoritos en cada tarjeta *(pendiente de lógica)*

## 🔧 Pendiente

- [ ] **Bug 1:** Búsqueda sensible a mayúsculas
- [ ] **Bug 2:** Filtros de búsqueda y región no se combinan
- [ ] **Bug 3:** Idiomas no se muestran en el modal de detalle
- [ ] **Feature 1:** Filtro por rango de población (inputs controlados)
- [ ] **Feature 2:** Paginación (12 países por página)
- [ ] **Feature 3:** Ordenar por nombre o población

Consulta el archivo  [BUGS_FEATURES.md](/BUGS_FEATURES.md) para mayor contexto

---

## 📌 Conceptos clave del taller

- `useEffect` con fetch para consumir una API REST
- `useState` para manejar estado de UI (búsqueda, filtros, selección)
- Pasar funciones como props entre componentes
- Manejar respuestas JSON con estructuras de datos reales (objetos y arrays)
- `localStorage` para persistir datos en el navegador

---

## 🛠️ Comandos útiles

```bash
npm run dev      # Servidor de desarrollo con hot-reload
npm run build    # Construir para producción
npm run preview  # Vista previa del build
```
