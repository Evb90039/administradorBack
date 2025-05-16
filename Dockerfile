# Imagen base oficial de Node.js
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto (Render usará la variable de entorno PORT)
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"] 