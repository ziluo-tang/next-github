This is a [Next.js](https://nextjs.org/) + [TypeScript](https://www.tslang.cn/docs/handbook/react-&-webpack.html) + [antd](https://ant.design/index-cn) + Less project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
$ git clone git@github.com:jontang-web/next-github.git
$ cd next-github
$ yarn
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## FAQ

#### 1. antd 自定义主题

#### 2. 兼容 Less & css-modules

#### 3. typeScript 文件中引入.less 文件报错

解决：项目更目录创建 externals.d.ts 文件，声明 less 模块，如：

```bash
declare module '*.less'
```

如果使用 css-modules，可以定义以下类型以匹配返回值：

```bash
declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}
```

最后把该文件添加到 tsconfig.json 的 includes 属性中，如：

```bash
{
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/.less"]
}
```
