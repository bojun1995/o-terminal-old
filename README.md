# electron-egg 
## 开始使用

1. 下载
    ```
    # gitee
    git clone https://gitee.com/wallace5303/electron-egg.git
    # github
    git clone https://github.com/wallace5303/electron-egg.git
    ```

2. 安装，node推荐v14.16.0
    ```
    # 提升安装速度，使用国内镜像；
    npm config set registry https://registry.npmmirror.com
    # 进入目录 ./electron-egg/
    npm install
    ```
    
3. 常用命令
    ```
    # 开发者模式
        # 1：【进入前端目录】，启动vue
        cd frontend && npm install && npm run serve
        
        # 2：【根目录】，启动后端服务
        cd ../ && npm run dev

    # 预发布模式（环境变量为：prod）
    npm run start

    # 打包-windows版本
    npm run build-w (32位)
    npm run build-w-64 (64位)

    # 打包-mac版本
    npm run build-m
    npm run build-m-arm64 (苹果M1芯片架构)

    # 打包-linux版本
    npm run build-l

    # web运行-开发模式
    npm run web-dev

    # web运行-生产者模式-启动
    npm run web-start

    # web运行-生产者模式-停止
    npm run web-stop
    ```



