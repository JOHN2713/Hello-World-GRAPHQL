# Hola Mundo GraphQL API

Una implementación básica de un servidor GraphQL utilizando Node.js y Apollo Server. Este proyecto es ideal para aprender los fundamentos de GraphQL y cómo dockerizar un servidor para su despliegue.

## Descripción

Este servidor GraphQL expone un único endpoint `/graphql` donde puedes ejecutar queries para obtener el mensaje de bienvenida `¡Hola Mundo desde GraphQL!`. Es un proyecto diseñado para principiantes en **GraphQL** y **Docker**.

## Características

- Implementado en **Node.js** usando **Apollo Server**
- Respuesta en formato **GraphQL**
- **Dockerizado** para facilitar el despliegue en cualquier sistema
- Compatible con cualquier entorno que soporte Docker

## Instalación

### Requisitos previos

Asegúrate de tener instalado:
- Node.js (versión 18 o superior)
- Docker y Docker Compose (opcional)

### Configuración local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JOHN2713/Hello-World-GraphQL-API.git
   cd Hello-World-GraphQL-API
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor:
   ```bash
   node index.js
   ```

4. Accede a la API en http://localhost:4000/

## Docker

### Construcción de la imagen

1. Construye la imagen Docker:
   ```bash
   docker build -t hola-mundo-graphql .
   ```

2. Ejecuta el contenedor:
   ```bash
   docker run -p 4000:4000 --name hola-mundo-graphql-container hola-mundo-graphql
   ```

### Usando Docker Compose

1. Ejecuta con Docker Compose:
   ```bash
   docker-compose up
   ```

2. Detén la aplicación:
   ```bash
   docker-compose down
   ```

## Uso

### Endpoint disponible

El servidor GraphQL está disponible en `/graphql`.

### Ejemplo de query

Puedes enviar la siguiente query para obtener el mensaje de bienvenida:

```graphql
query { hello }
```

### Respuesta esperada

```json
{
  "data": {
    "hello": "¡Hola Mundo desde GraphQL!"
  }
}
```



