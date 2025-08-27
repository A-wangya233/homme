# Vue2 项目 - Homme

这是一个基于Vue2的单页面应用，包含菜单导航和路由功能，特别集成了new-colSbj页面内容。

## 🚀 功能特色

- ✅ Vue2 + Vue Router
- ✅ 现代化UI设计
- ✅ 响应式布局
- ✅ 菜单路由导航
- ✅ 集成new-colSbj页面
- ✅ GitHub Pages自动部署

## 📦 安装依赖

```bash
npm install
```

## 🛠️ 开发

```bash
npm run serve
```

访问 http://localhost:8080

## 🏗️ 构建

```bash
npm run build
```

## 🚀 部署到GitHub Pages

### 方法一：自动部署（推荐）

1. 将代码推送到GitHub仓库
2. 确保仓库设置中启用了GitHub Actions
3. 每次推送到main分支时，会自动构建并部署到GitHub Pages

### 方法二：手动部署

```bash
npm run deploy
```

## 📁 项目结构

```
homme/
├── public/
│   └── index.html          # HTML模板
├── src/
│   ├── components/         # 组件
│   ├── views/
│   │   ├── Home.vue       # 首页
│   │   └── NewColSbj.vue  # new-colSbj页面
│   ├── router/
│   │   └── index.js       # 路由配置
│   ├── App.vue            # 主应用组件
│   └── main.js            # 入口文件
├── .github/
│   └── workflows/
│       └── deploy.yml     # 自动部署配置
├── package.json
├── webpack.config.js      # Webpack配置
└── README.md
```

## 🎯 页面导航

- **首页 (/)**: 项目介绍和特色展示
- **New-ColSbj Vue版 (/new-colSbj)**: 使用Vue组件重构的随借备用金页面
- **New-ColSbj 原始版 (/original-colSbj)**: 原始的HTML/CSS/JS版本的随借备用金页面

## 🔧 配置说明

### 路由配置

路由使用hash模式，适合GitHub Pages部署：

```javascript
const router = new VueRouter({
  mode: 'hash',
  routes: [...]
})
```

### GitHub Pages配置

在`package.json`中更新以下字段：

```json
{
  "repository": {
    "type": "git", 
    "url": "https://github.com/A-wangya233/homme.git"
  },
  "homepage": "https://A-wangya233.github.io/homme"
}
```

将`YOUR_USERNAME`替换为您的GitHub用户名。

## 📱 响应式设计

项目完全适配移动端设备，包含：
- 响应式导航菜单
- 移动端优化的按钮和交互
- 适配不同屏幕尺寸的布局

## 🎨 技术栈

- Vue 2.6.14
- Vue Router 3.6.5
- Webpack 5
- Babel
- CSS3 动画和渐变

## 📄 许可证

MIT License
