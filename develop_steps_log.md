1.28 18:57 使用vue-cli ( vue  init webpack  ) 初始化项目, 并用 git ( git init )初始化仓库
1.28 19:27 创建 状态管理的文件夹 ( ./src/store/index.js ) ,在 入口文件 main.js中引入 ; 并且 使用 fastclick 解决移动端的点击延迟问题
1.28 23:08 新建了page文件夹,并创建了 home.vue 文件, 并且在路由配置中实现了路由导航, 因为home.vue页面使用了自定义的组件 header, 因此在components文件夹中新建了
    ./header/header.vue 组件

1.30 16:38 完成了homePage页面的制作, 创建了操作数据的模块 (getData.js) , 网络请求模块(fetch.js) , 自定义的工具库模块( mUtils.js ) , 以及项目运行环境配置的模块( env.js)
            在home页面的 声明周期 mouted 中 获取数据,并且赋值. 最终完成页面的制作.  ---->  next step: 完成登录与用户详情页面部分