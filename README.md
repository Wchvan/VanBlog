[TOC]

# VanBlog

个人博客

当出现(!)的时候表示下面会解释

## 网页主要功能介绍

### 头部导航栏
1. 点击首页按钮返回首页
2. 点击留言板功能进入留言板区域

### 轮播图

1. 正常情况下滚动播放图片
2. 当按下前后按钮的时候可以实现图片向前/后定位一张
3. 当按下底部圆点时可以实现看第几张图片

### 学习记录

1. 左侧导航栏放输入框，可以在上面提交我们的学习记录
2. 然后就会在学习记录区域出现一条区域
3. 点击删除键就会将这条记录删除
4. 点击题目右侧就保留置顶区域，余下区域显示学习记录具体内容
5. 区域中包含两个键 “首页” 和 “删除记录”  来实现功能、
6. 点击学习记录区域的排序图标就可以实现学习记录的排序
7. 点击批量删除就可以实现批量删除记录

### 留言板

1. 点击头部导航栏的 留言板就可以进入留言板区域
2. 在留言板下方输入留言板的内容以及个人信息就可以留言并在留言板区域显示
3. 点击留言的删除就可以删除留言
4. 点击筛选就可以根据选项来选出想看到的部分群体的留言
5. 通过学号来验证

### 主题
1. 点击不同的按钮呈现不同的主题颜色

## 实现功能的大致思路

### 初始页面
上网看了一些人的网页以及CSDN等，决定页面布局大概就是上部导航栏，中间放一些自己想放的东西，个人介绍和导航栏放左侧

### 导航栏

1. 通过jQuery的fadeIn和fadeOut函数来实现淡入淡出转换首页和留言板
2. 通过循环遍历修改background和color来改变主题

### 轮播图

我暑假是有在b站上网课学习过js的，所以大致知识点都会，然后看到轮播图的时候我思考大概两种解决思路：
1. 图片拼接成雪碧图
2. 通过ul li img 设置 ul的宽度和img的宽度然后让li浮动实现伪雪碧图

然后我选择了第二个，因为我不太会p图。

然后大致的设计思路就是：
1. 建立一个div作为轮播图的空间并在里面设置ul li img及其css属性
2. 给div 和 img的宽高设置成一样
3. 设置成轮播的形式，发现最后会有一个空白，然后就再加了第一张图片到末尾，但是判定条件仍然是六张图，ul的宽度改为7张图
4. 去iconfont网站下载svg图片，用定位的知识设置位置，用onclick设置点击后的效果
5. 增加下面数字表示当前播放第几张然后鼠标悬浮时页面不动，离开时才动

实现具体：

1. 利用settimeout和clearout来实现轮播和暂停
2. 设置一个div为展示区域
3. 就是div和img宽度设为一样并且div设一个overflowhidden，然后ul的宽度设为七张图用于达到伪雪碧图的效果。
4. 然后用像素和marginLeft实现图片定位


### 学习记录区域

我看到个人介绍下面有一块空的区域，就想好了大致思路就是这个地方放导航栏，然后通过导航栏来实现，大致的设计思路是：
1. 首先我意识到在这块小区域放置具体内容不现实且不美观，所以只负责导航栏和输入的作用
2. 然后先做导航栏的静态页面，这个没什么困难
3. 然后做具体事件，通过js来实现点击不同按钮的时候发生的事件：
4. 每次登录页面的时候读取本地存储的学习记录

具体产生的事件是：

1. 通过form元素构建一个浏览器能接受传输信息的表单，里面包括标题、具体内容和提交按钮。
2. 点击提交上侧就出现一个记录
3. 点击记录就在右侧建立一个区域展示这个记录的具体内容
4. 点击记录的删除键就删除这个记录
5. 点击区域的首页键就返回首页
6. 点击区域的删除键就删除这个记录并返回首页
7. 点击批量删除按钮，记录旁边的删除键就变成圆点表示是否选中，然后再次点击右边区域自动返回首页并且删除选中记录。
8. 删除键是圆点时点击奇数次时就是批量删除，偶数次就是不变。
9. 点击排序按钮可以实现按时间从早到晚或者从晚到早排序

具体实现方案：

1. 通过循环的方式和getitem来读取文章记录，然后将其添加到对象列表并更新localstorage等。
2. 创建一个对象用于将收集到的表单转化为一个记录，对象里包括记录的标题、内容、时间，然后在对象里建立一个可视区域（viewContent）和可视区域的按钮（btn），并在这两个里面放置index用于存储对象索引值(!)，btn里再放置一个Delindex来确认其在批量删除数组(!)内的索引值，btn里还要放置一个flag用于让btn在不同情况下点击触发不同事件(!)，并且每次创建时候就在左侧学习记录区域导航栏创建一个记录
3. 创建一个对象列表将所有创建的对象放入，便于进行增删改查等操作，然后将索引值存储到viewConten和btn中
4. 并且每次创建对象的时候将对象存入localstorage中并且创建一个key为“passagelength”存储数组长度
5. 设置导航栏记录的点击功能，点击时候就通过循环将主区域内除置顶以外的元素的display属性全部设为none，然后创建一个新的区域用于展示文章
6. 设置导航栏记录按钮的点击功能，通过索引值就可以找到对象在对象列表的索引，然后通过对象列表将其可视区域remove，然后如果右侧文章区域在展示的话就返回首页
7. 设置一个DelArray用于存储批量删除的记录
8. 设置一个全局变量Delflag用于判断批量删除按钮的功能，第一次按的时候将所有记录的按钮样式改变，并且修改其的flag来将其删除功能改为选定功能，第二次按得时候就将批量删除数组内的元素的viewContent对象remove掉
9. 上述的btn在这个时候又派上用场，此时可以介绍这个btn三种功能，第一个是没有进入批量删除状态时，点击它就将它的父元素remove掉，第二个和第三个是进入时，第一次点击，它的背景就变成红色表示进入删除数组并存储其删除数组的索引,第二次点击就背景变为无，然后通过索引和slice函数就可以从删除数组中去掉，依次类推
10. 设置一个全局变量Sortflag用于指定排序按钮点击的不同效果，点击之后就将放置区域内的子节点都删除除了它本身，然后再通过对象列表添加进去，实现排列功能

### 留言板

其实做了学习记录区域，这个区域就大差不差

设计思路大致是：
1. 首先将首页和留言版分为两个区域，点击留言板时就只显示留言，类似于qq空间
2. 留言出来的内容就有删除键便于删除
3. 顶部放筛选的按钮来选取想看的留言
4. 通过学号来验证

具体实现方案：

1. 每次开始前循环来遍历读取留言记录，并删除没有用的记录
2. 每次提交表单创建一个对象用于存储留言，里面的属性与学习记录差不多，然后将其发送到localstorage并存入创建的对象列表
3. 点击留言的删除键就可以在记录中就flag修改为0 便于第二次进入网页时删除，也为以后如果实现恢复记录功能做准备
4. 点击筛选时将筛选的条件与对象里的属性作比较然后留下符合条件的记录
5. 通过学号、match函数和正则表达式函数来验证

## 学习过程的记录

### HTML 和 CSS

这两个是前端的基础，是我暑期刚开始在bilibili学习的，所以做静态页面的过程就很简单，就先网上看了一些人的博客，大致有个自己的构建思路，然后就简单的写一下。
先用css分为公用样式和每个区域的样式
然后html中从上到下，从左到右的写网页。
遇到的第一个问题：
当缩小网页之后发现网页头部右侧变成空的，我想出了两个解决方案：
一个是把网页所有的width从px改为百分比，二是在头部的css加上属性min-width
最后通过min-widthh解决问题


### git

这是我看了招新题之后去廖雪峰的网站学习的，过程中主要遇到的麻烦只有一个：
就是我先构建了一个私有库，然后在构建一个新的库，然后在原来的库的本地文件夹下push和pull的时候发现出问题了；

```
[rejected] main -＞ main (non-fast-forward)error: failed to push some refs to
```

这是报错代码
网上说是pull的问题，然后我pull也没用，最后我自己看了廖雪峰的教程想了一个可能的解决思路：
我先创建一个新的文件夹，然后用SourceTree克隆过来，然后再将我的网页文件放入这个文件夹，然后push回去就解决了。

### Netlify


学习是看b站学习大致怎么用吧
然后deloy时候遇到一个404问题，报错大概是：
```
I’ve deployed my site but I still see “Page not found”
```
看了官方文档确定大致思路：
因为我的index.html是库里建一个博客文件夹然后放在里面，可能Netlify无法获取到index.html文件就没办法部署，所以我就把文件夹里的东西全部提取出来直接放到库文件夹里，然后提交，这样子库就能直接看到index.html文件，然后在Netlify里重新部署一下解决。


### js

在网上看渡一课程，然后localstorage是看着CSDN博客上学的，现学现用吧。