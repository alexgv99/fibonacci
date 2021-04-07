###############################
# Imagem para build
###############################
FROM node:12.16.1 as builder

# des, hom, prod

# Diretório da aplicação
ENV APP_ROOT=/usr/src/app
WORKDIR ${APP_ROOT}

# Copia código
COPY . ${APP_ROOT}

# Fix para problemas de permissão na instalação de pacotes globais
# RUN npm config set user root

# Comando de build
RUN yarn install
RUN yarn build

###############################
# Imagem para execução
###############################
FROM nginx:1.17-alpine as runtime

# Diretório da aplicação no builder
ENV APP_ROOT=/usr/src/app

# Copia output do build
COPY --from=builder ${APP_ROOT}/build /usr/share/nginx/html

# Para Single Page Apps erros 404 devem retornar para o index
RUN sed -i 's/#error_page\s*404\s*\/404.html/error_page 404 =200 \/index.html/' /etc/nginx/conf.d/default.conf
