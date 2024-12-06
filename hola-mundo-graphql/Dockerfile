# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto 4000 para GraphQL
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
