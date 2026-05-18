# Lab08 - Laboratorio de Next.js

Este repositorio contiene el desarrollo completo del laboratorio solicitado, incluyendo:

- **Ejercicio 1:** Hola Mundo.
- **Ejercicio 2:** CSR (Client-Side Rendering).
- **Ejercicio 3:** SSR (Server-Side Rendering).
- **Tarea:** Lista de productos con filtro por categoría (CSR).

---

## Requisitos previos

Antes de ejecutar el laboratorio, verifica lo siguiente:

- Tener instalado **Node.js**: https://nodejs.org
- Tener instalado **npm** o **yarn**
- Usar un editor de código como **Visual Studio Code**

---

## Configuración y ejecución

1. Clona o descarga este repositorio.
2. Ingresa al proyecto:

```bash
cd my-app
```

3. Instala dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre en el navegador:

- http://localhost:3000

---

## Estructura de rutas del laboratorio

Desde la página principal encontrarás enlaces a cada ejercicio:

- `/` → Índice del laboratorio.
- `/ejercicio1` → Hola Mundo en Next.js.
- `/ejercicio2` → CSR: hora actual en cliente con botón de actualización.
- `/ejercicio3` → SSR: hora actual renderizada en servidor.
- `/tarea` → Lista de productos con filtro por categoría (CSR).

---

## Desarrollo por ejercicio

## Ejercicio 1: Hola Mundo en Next.js

**Objetivo:** mostrar una página simple para validar el entorno Next.js.

- Archivo: `my-app/app/ejercicio1/page.tsx`
- Resultado: mensaje de bienvenida “¡Hola Mundo en Next.js!”.

---

## Ejercicio 2: CSR (Client-Side Rendering)

**Objetivo:** crear un componente que muestre la hora actual y se actualice al hacer clic.

- Archivo: `my-app/app/ejercicio2/page.tsx`
- Se utiliza:
  - `"use client"`
  - `useState`
- Funcionamiento:
  - La hora se inicializa en cliente.
  - Al presionar el botón, se actualiza la hora sin recargar la página.

---

## Ejercicio 3: SSR (Server-Side Rendering)

**Objetivo:** mostrar la hora renderizada desde el servidor.

- Archivo: `my-app/app/ejercicio3/page.tsx`
- Funcionamiento:
  - La hora se calcula en el servidor al renderizar la ruta.
  - Al recargar, se obtiene una nueva hora renderizada.

---

## Tarea: Lista de productos con filtro por categoría (CSR)

**Objetivo:**

- Mostrar lista de productos.
- Filtrar por categoría.
- Usar `useState` y `useEffect`.

- Archivo: `my-app/app/tarea/page.tsx`
- Implementación:
  - `useState` para categoría seleccionada y productos.
  - `useEffect` para cargar productos del lado cliente.
  - Botones para filtrar categorías.
  - Renderizado dinámico de la lista filtrada.

---

## Evidencias solicitadas

Para completar la entrega del laboratorio:

- Colocar **capturas de código** de cada ejercicio y de la tarea.
- Colocar **capturas de ejecución** (navegador) de cada ruta.
- Grabar un video explicando código y ejecución (**máximo 4 minutos**).

Sugerencia de rutas para capturas:

1. `http://localhost:3000/ejercicio1`
2. `http://localhost:3000/ejercicio2`
3. `http://localhost:3000/ejercicio3`
4. `http://localhost:3000/tarea`

---

## Observaciones

- Se validó el entorno de trabajo con Node.js y npm antes de iniciar.
- Se organizó el laboratorio por rutas separadas para facilitar revisión y exposición.
- Se aplicó CSR en los casos interactivos (`/ejercicio2` y `/tarea`) para actualizar contenido en el cliente.
- Se aplicó SSR en `/ejercicio3` para mostrar la diferencia de renderizado en servidor.
- Se ejecutó `npm run lint` para verificar calidad y consistencia del código.

---

## Conclusiones

- El laboratorio permitió diferenciar claramente entre **CSR** y **SSR** en Next.js mediante ejemplos simples y prácticos.
- El uso de `useState` y `useEffect` facilitó la construcción de interfaces dinámicas sin recarga completa.
- Separar ejercicios por rutas mejoró la organización del proyecto y la presentación de evidencias.
- La tarea de filtrado de productos reforzó el manejo de estado y renderizado condicional en React/Next.js.
- Como mejora futura, se puede conectar la lista de productos a una API real para trabajar datos persistentes.

---

## Comando de verificación

```bash
npm run lint
```

Ejecutar en:

```bash
cd my-app
```
