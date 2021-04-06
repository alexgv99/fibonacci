
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

## to serve use just the prod dependencies

```bash
rm -dfr node_modules
yarn install --prod
yarn serve
```
