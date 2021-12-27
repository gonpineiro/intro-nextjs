##### Instalacion Next.js

1. `yarn add next react react-dom`
2. Agregar los siguente scripts en el package.json

```json
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
```

2. Crear una carpeta que se llame `pages`

##### Routing basado en el FIle System y paginas basicas

Next.js genera las rutas del proyecto basado en los archivos dentro de pages. El archivo index.js va ser siempre el home de nuestra aplicacion

##### Routing Dinamico

Se debe generar una carpeta por cada ruta dinamica, y dentro de la carpeta se debe generar archivos (identificadores) con la siguente sintaxis `[<nombre>].js`,donde el nombre entre `[]` va ser el identificador usado mas adelante

Existe un hook que se llama `useRouter()` en el cual dentro existe un objeto que se llama `query`, ahi se almacena el valor (identificador)

```js
const router = useRouter()
```

##### Generar una API con Next.js

Se debe crear una carpeta dentro de pages que se llame `api`, en el cual dentro de esta carpeta van a ir los difererentes endpoint de la API

##### Extender el documento de Next.json

https://nextjs.org/docs/advanced-features/custom-document#caveats

Se debe crear un archivo dentro del `root` de `pages` que se llame `_document.js`
Tambien se peude crear dentro del `root` de `pages` otro archivo que se llame `_app.js`, en cual sirve para pasar:

- Providers
- Layout
- Props adicionales
