# {{title}} 

{{description}}

## Install

```shell
npm i {{name}}
```

## Development

1. run rollup to watch your `src/` module and automaticlly recompile it inito `dist/` whenever you make change.

   ```shell
   # runs rollup with watch flag
   npm start 
   ```

2. run the `example/` and linked to the local version of your module.

   ```shell
   cd example
   npm i

   # link local module
   npm i file:..
   
   # runs example dev server
   npm start
   ```

3. import style of your module to `example/src/styles/base.scss`

   ```scss
   @import "~{{name}}/dist/{{name}}";
   ```

4. import your module to `example/src/containers/[Page]/index.js`

   ```js
   import { Example } from '{{name}}';
   ```

5. create `Container` in `example/src/containers` and edit `example/src/containers/routes.js` 