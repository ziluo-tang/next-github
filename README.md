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

解决：根目录下 next.config.js 配置中，lessLoaderOptions 配置项设置 modifyVars 属性值即可，参考[antd 官方实现](https://ant.design/docs/react/use-with-create-react-app-cn#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98)

#### 2. antd 与 css-modules 冲突

解决：参考[语雀](https://www.yuque.com/steven-kkr5g/aza/ig3x9w)实现

#### 3. typeScript 文件中引入.less 文件报错

解决：项目根目录创建 externals.d.ts 文件，声明 less 模块，如：

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
