
# Instructions

## to dev environment

```bash
yarn
yarn start
```

## to generate the build use all dev-dependencies

```bash
rm -dfr node_modules build
yarn install
yarn build
```

## to serve use docker container

```bash
docker build -t fibonacci-img .
docker run -d -p 8080:80 --rm --name fibonacci fibonacci-img
docker logs -f fibonacci
```

## point your broser to http://localhost:8080

by alexgv99
