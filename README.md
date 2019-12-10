# {{name}}

## 上手

### 安装

```shell
npm i {{name}}
```

### 使用

#### 组件调用

```js
import MyComponent from '{{name}}';
```

#### 组件样式

```scss
@import "~{{name}}/dist/pkg.css";
```

## 开发

项目使用 [rollup](https://www.rollupjs.org/guide/en/) 进行构建，你可以任意修改配置文件 `rollup.config.js` 并扩展它，也可以在[这里](https://github.com/rollup/awesome)搜寻你需要的 rollup 插件。

### 实时构建测试包

1. 执行 `npm start ` 构建并监视文件的更改
2. 执行 `npm link` 软链项目包到全局
3. 在你测试的项目中，执行 `npm link {{name}}`

注意 `package.json` 中的 `style` 字段是样式输出路径，请始终确保有效。

### 构建生产包

```
npm run build
```

## 发布

1. 执行 `npm version <major|minor|patch>` 更新版本
2. 执行 `npm publish`，会自动重新执行命令 `npm run build`，并发布包到 [NPM](https://www.npmjs.com/)。如果是 [scope](https://docs.npmjs.com/cli/publish.html) 的包，需要带 `--access public` 参数

