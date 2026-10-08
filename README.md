# Rick and Morty Explorer 🚀

Aplicación web desarrollada con **Angular** para explorar información sobre personajes, ubicaciones y episodios del universo de *Rick and Morty*, utilizando la API pública [Rick and Morty API](https://rickandmortyapi.com/).

Este proyecto fue creado como práctica de desarrollo frontend, con énfasis en **Angular Router**, consumo de APIs REST, componentes reutilizables, programación reactiva y control de versiones con Git y GitHub.

## ✨ Funcionalidades

- **Personajes:** consulta y visualización de personajes obtenidos desde la API.
- **Paginación:** navegación entre páginas de resultados de personajes.
- **Detalle de personajes:** sección con ruta dinámica `/rickandmorty/characters/:id`.
- **Ubicaciones:** consulta de ubicaciones y visualización de los personajes residentes de cada una.
- **Episodios:** consulta y visualización de información de episodios.
- **Navegación:** rutas principales y rutas hijas mediante Angular Router.

## 🛠️ Tecnologías

- Angular y TypeScript
- HTML y CSS
- Angular Router
- HttpClient
- RxJS
- Angular Signals
- Git y GitHub

## 🌐 API utilizada

[Rick and Morty API](https://rickandmortyapi.com/documentation)

Endpoints principales:

```text
GET https://rickandmortyapi.com/api/character
GET https://rickandmortyapi.com/api/character/{id}
GET https://rickandmortyapi.com/api/location
GET https://rickandmortyapi.com/api/episode
```

Para obtener los residentes de una ubicación, la aplicación procesa los identificadores presentes en las URLs de residentes y consulta sus datos en la API.

## 🧭 Rutas de la aplicación

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio |
| `/rickandmorty/characters` | Listado de personajes |
| `/rickandmorty/characters/:id` | Detalle de personaje |
| `/rickandmorty/locations` | Ubicaciones y residentes |
| `/rickandmorty/episodes` | Episodios |

## ⚙️ Instalación y ejecución

**Requisitos:** Node.js, npm y Angular CLI compatibles con la versión de Angular utilizada en el proyecto.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Francisco678/RickAndMortyExplorer.git
   ```

2. Entra al directorio:

   ```bash
   cd RickAndMortyExplorer
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npx ng serve
   ```

5. Abre `http://localhost:4200/` en tu navegador.

## 📚 Aprendizajes del proyecto

- Organización de la interfaz mediante componentes standalone.
- Configuración de rutas anidadas y rutas con parámetros.
- Consumo de servicios REST con `HttpClient` y `Observable`.
- Gestión del estado de la interfaz mediante Signals.
- Transformación de respuestas de la API para adaptarlas a la vista.
- Manejo de peticiones asíncronas y resultados vacíos.
- Desarrollo por funcionalidades con ramas, commits y pull requests.

## 🚧 Estado del proyecto

Proyecto de aprendizaje en evolución. Algunas funcionalidades y mejoras pueden seguir en desarrollo.

## 👨‍💻 Autor

**Francisco Reyes**  
GitHub: [@Francisco678](https://github.com/Francisco678)

## 📄 Créditos

Los datos del universo de *Rick and Morty* son proporcionados por la [Rick and Morty API](https://rickandmortyapi.com/).
