
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

### to local teste, point your broser to <http://localhost:8080>

### source code available

<https://github.com/alexgv99/fibonacci>

### production endpoint

<https://fibonacci-alexgv99.vercel.app/>

by alexgv99
