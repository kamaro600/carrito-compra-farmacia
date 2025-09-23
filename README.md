# Aplicación Web de Carrito de Compras para Farmacia

Este proyecto es una aplicación web para un carrito de compras de una farmacia, desarrollada con Angular.

## Tecnologías Utilizadas

*   **Angular**: Una plataforma para construir aplicaciones web de escritorio y móviles. Version usada Angular CLI: 18.2.21
*   **NodeJS***: Version usada Node: 20.19.5
*   **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos.
*   **Bootstrap**: Un popular framework de CSS para desarrollar sitios web responsivos y mobile-first.
*   **Font Awesome**: Un popular conjunto de herramientas e iconos.
*   **SCSS**: Un preprocesador de CSS que añade características como variables y anidamiento.

## Guía de Inicio

Sigue estas instrucciones para obtener una copia del proyecto y ejecutarlo en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Necesitas tener [Node.js](https://nodejs.org/) y [Angular CLI](https://cli.angular.io/) instalados en tu sistema.

Puedes verificar tus instalaciones con:

```bash
node -v
npm -v
ng version
```

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/kamaro600/carrito-compra-farmacia.git
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd carrito-compra-farmacia/pharmacy-app
    ```

3.  **Instala los paquetes de NPM:**
    ```bash
    npm install
    ```

4.  **Configura el endpoint de la API:**

    Abre el archivo `src/environments/environment.ts` y modifica la propiedad `apiUrl` para que apunte a tu API de backend.

## Servidor de Desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.

## Compilación (Build)

Ejecuta `ng build` para compilar el proyecto. Los artefactos de la compilación se almacenarán en el directorio `dist/`. Usa la bandera `--prod` para una compilación de producción.

## Más Ayuda

Para obtener más ayuda sobre Angular CLI, usa `ng help` or revisa la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
