# BA 导购助手后台

## node版本
v14.17.5

## 安装

推荐通过 `pnpm` 来作为本项目的包管理工具：

```sh
npm install -g pnpm
```

## 开发调试

运行 `pnpm dev` 或者 `pnpm dev:vite`:

```sh
# 安装依赖 根目录
pnpm install
# 启动开发服务器，这种方式是基于webpack的启动方式
pnpm dev
# 如果不想webpack启动方式，也可以启动Vite开发服务器，两种开发模式二选一
pnpm dev:vite
# 打包文件分析
pnpm build:analyze
```

#### 目录和组件命名规范

```sh
> components
# 局部公共组件和局部通用业务组件存放位置
> components>globals
# 全局公共组件存放位置
> 目录和组件命名
# kebab-case (短横线分隔命名)
> 导入组件用大写形式
import HelloWorld from '@/components/hello-world/index.vue';
> template模板采用 kebab-case (短横线分隔命名)
<hello-world></hello-world>
```

### 如何引入 antd 注册对应组件
`项目使用的antd版本ant-design-vue`，[ant-design-vue 版本地址](https://www.antdv.com/components/overview-cn)
```sh
> hooks>usePlugins>components.ts
import { Button, Radio, Alert, ConfigProvider, Spin } from 'ant-design-vue';
//引入antd组件注册列表
const antdvCmp = [Button, Radio, Alert, ConfigProvider, Spin];
const components = [...antdvCmp];

export { components };

```

### 如何注册全局组件

```sh
>  components>globals>index.ts

import Dialog from '@/components/globals/dialog/index.vue'; //全局Dialog
import Icon from '@/components/globals/icon/index.vue'; //全局Icon
import { App } from 'vue';
const globalDialog = {
  install: (app: App): void => {
    app.component('p-dialog', Dialog);
  },
};
const globalIcon = {
  install: (app: App): void => {
    app.component('p-icon', Icon);
  },
};
export { globalDialog, globalIcon };

> composable>usePlugins>components.ts
import { globalDialog, globalIcon } from '@/components/globals';
//引入antd组件注册列表
const globalComp = [globalDialog, globalIcon];
const components = [...globalComp];

```

### 如何设置 antd 主题

```sh
> assets>style>antd-theme.less
@primary-color: #337ab7;
@link-color: #337ab7;
@border-radius-base: 2px;
@text-color: #1F2329;
@text-color-secondary: #8F959E;
# 主题设置链接 https://github.com/vueComponent/ant-design-vue/blob/next/components/style/themes/default.less
```

### 如何设置项目主题

```sh
> assets>style>theme.scss
$text-ultrastrong: rgb(0 0 0 / 85%);
$text-strong: rgb(0 0 0 / 65%);
$text-medium: rgb(0 0 0 / 45%);
$text-weak: rgb(0 0 0 / 25%);
$text-ultraweak: rgb(0 0 0 / 15%);
$text-link: #3366ff;
$text-critical: #ff4747;

```

### hooks 存放hooks目录

从 hooks 导出类型

```sh
import { useAuth } from '@/hooks';

```

### types 存放类型目录

从 types 导出类型

```sh
import { Citys,StateTable,Pagination } from '@/types';

```

### utils 存放工具类目录

从 utils 导出工具方法

```sh
import { formatDate,isMobile,formatMoney } from '@/utils';

```

### 提交代码规范

```sh
# 添加修改
git add .
# 执行commit
pnpm commit
# 提交到对应的分支
git push origin 分支名
```

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `ui` 更新 UI
- `refactor` 重构
- `revert` 撤销修改
- `test` 增删测试
- `chore` 依赖更新/开发工具变动(构建、脚手架工具等)
- `merge` 合并代码
- `del` 删除代码/文件

