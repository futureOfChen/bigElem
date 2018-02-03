###1.28 18:57 使用vue-cli ( vue  init webpack  ) 初始化项目, 并用 git ( git init )初始化仓库
###1.28 19:27 创建 状态管理的文件夹 ( ./src/store/index.js ) ,在 入口文件 main.js中引入 ; 并且 使用 fastclick 解决移动端的点击延迟问题
### 使用rem实现不同尺寸屏幕的适配

### 2.3 10:16  因为时间原因, 手动无法完成所有项目,因此打算直接看代码写思路,尽可能体现出所有细节

### 1. 使用vue-cli(vue init webpack)初始化项目的目录, 并且使用git (git init) 初始化仓库,进行版本控制.因为需要使用到vuex,所以创建 ./src/store/index.js 文件, 其次需要实现不同屏幕的适配,创建./src/config/rem.js, 在main.js中 引入 vue-router, vuex ,fastClick( 解决移动端的点击延迟问题 ), 引入rem.js 实现屏幕的适配
### 2. 创建./src/page/home/home.vue文件, 在home.vue 中需要引入 header组件, 因此创建 ./src/components/header/header.vue文件 ,在header.vue文件中,需要获取从父组件传入的属性['singinUp','headTitle','goBack'],三者分别控制登录,头部标题,以及返回按钮的显示与内容, 同时在头部需要获取当前的用户信息,用来决定是显示登录 / 查看用户的具体信息,从localStorage中获取 用户user_id,从后台获取用户信息, 如果本地没有user_id,则表示未登录,那么用户userInfo就为空( header组件显示的是 登录|注册 ), 否则用户的信息就不为空(header组件显示的是用户的头像) ; 在home页面内, 需要获取从服务器获取guessCity,hotCity,groupCity 信息, 用 v-for循环完成home页面 , 点击elem 要刷新当前页面,使用 window.location.reload() 实现 , 经过以上就完成了 home.vue 页面

### 3. 承接第2步,当用户尚未登录时,点击 登录|注册 进入登录页面,于是创建 ./src/page/login/login.vue文件, login页面需要引用 header以及 alertTip 组件; 登录前需要获取验证码,因此需要从 getData中引入 getCaotcha() 从服务器中拿到验证码 , 在点击登录时,调用从getData中引入的accountLogin如果登录信息错误,需要弹出alertTip(提示窗口),窗口错误的描述是从父组件传入的值. 窗口出现使用动画效果, 直接引入animate.css 在alertTip 上添加 animated 以及相应的类实现动画效果, 如果登录成功, 调用 vuex的RECORD_USERINFO,将userInfo存入store中, 将user_id存入localStorage中,再然后调用 this.$router.go(-1),回到首页,此时首页显示的用户已经登录.