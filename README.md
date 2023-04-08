# reactredux-wise

## Wise Test App 

Esta aplicación web está desarrollada con React y Vite.
La aplicación permite buscar y visualizar información de los productos de API(https://fakestoreapi.com/).

La aplicación está desarrollada con el patrón de diseño simple de Zustand, que permite la gestión del estado de la aplicación de una manera más sencilla basada en Flux.
Para la gestión de las peticiones a la API se ha utilizado el metodo fetch.
Para la gestión de los estilos se ha utilizado la librería Tailwindcss.
Para la gestión de los iconos se ha utilizado Svg as a Component.
Para la gestión de los hooks se ha utilizado la librería React Hooks.

## Estructura de la aplicación
La aplicación está estructurada en 3 carpetas principales:
- Main: contiene la estructura inicial de la aplicacion.
- assets: contiene los recursos de la aplicacion como svg.
- store: contiene los archivos de configuración de Zustand.

## Páginas
Las páginas de la aplicación se encuentran en la carpeta src.
Las páginas se han estructurado en 2 archivos:
- App: contiene la página principal de la aplicación.
- index: contiene la conexion con react-dom.

## Patrones
- Patron High order component
- Patron Presentational & Container
- Patron Compound

## Librerias
- React (para la creación de la aplicación)
- React-dom (para la conexión con el DOM)
- Zustand (para la gestión del estado)
- Tailwindcss (para la gestión de los estilos)
- Nprogress (para la barra de progreso)
- Vite (para la compilación de la aplicación)

## Instalación
Yarn
```bash
yarn install
```
NPM
```bash
npm install
```

## Ejecución
Yarn
```bash
yarn dev
```
NPM
```bash
npm run dev
```

## Despliegue
Yarn
```bash
yarn build
```
NPM
```bash
npm run build
```

## Url de la aplicación
https://reactredux-wise.vercel.app/

## License
[MIT](https://choosealicense.com/licenses/mit/)