# Base image
FROM nginx:alpine

# Diretório de trabalho do Nginx (onde os arquivos estáticos serão colocados)
WORKDIR /usr/share/nginx/html

# Apagar arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html

# Copiar os arquivos estáticos gerados pelo Next.js para o Nginx
COPY out/ /usr/share/nginx/html

# Expor a porta 80 (porta padrão do Nginx)
EXPOSE 80