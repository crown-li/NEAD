# Nuxt.js + Element Plus + Django Template

这是一个使用 Nuxt.js (Vue 3) 作为前端，Element Plus 作为 UI 框架，Django 作为后端的全栈项目模板。

## 技术栈

### 前端

- Nuxt.js 3
- Vue 3
- Element Plus
- Axios

### 后端

- Django 4.2+
- Django REST framework
- Django CORS headers

## 项目设置

### 前端设置

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 后端设置

#### Windows 用户

第一次设置：

```bash
cd server
setup.bat
```

之后启动：

```bash
cd server
activate.bat
python manage.py runserver
```

#### Linux/Mac 用户

第一次设置：

```bash
cd server
chmod +x setup.sh
./setup.sh
```

之后启动：

```bash
cd server
source activate.sh
python manage.py runserver
```

## 项目结构

```
project/
├── client/                 # 前端 Nuxt.js 项目
│   ├── components/        # Vue 组件
│   ├── composables/       # 组合式函数
│   ├── pages/            # 页面组件
│   └── ...
│
├── server/                # 后端 Django 项目
│   ├── api/              # Django 应用
│   ├── myproject/        # Django 项目设置
│   ├── manage.py
│   ├── requirements.txt  # Python 依赖
│   ├── setup.bat        # Windows 设置脚本
│   ├── setup.sh         # Linux/Mac 设置脚本
│   ├── activate.bat     # Windows 激活脚本
│   └── activate.sh      # Linux/Mac 激活脚本
│
└── README.md
```

## 开发指南

1. 前端开发

   - 前端代码位于 `client` 目录
   - 使用 `npm run dev` 启动开发服务器
   - 默认运行在 `http://localhost:3000`

2. 后端开发
   - 后端代码位于 `server` 目录
   - 激活虚拟环境后运行 `python manage.py runserver`
   - 默认运行在 `http://localhost:8000`

## API 端点

- GET `/api/getStart`: 获取启动消息

## 注意事项

1. 确保已安装以下软件：

   - Node.js (16.x 或更高版本)
   - Python (3.8 或更高版本)
   - pip (Python 包管理器)

2. 开发时需要同时运行前端和后端服务器

3. 首次克隆项目后需要：

   - 在 client 目录下运行 `npm install`
   - 在 server 目录下运行相应的 setup 脚本

4. 环境变量
   - 开发环境下前端 API 地址默认为 `http://localhost:8000`
   - 可以通过环境变量文件配置不同环境的设置
