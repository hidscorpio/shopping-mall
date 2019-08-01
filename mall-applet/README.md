# mall-applet

# mall

## 说明

> 基于SpringBoot+MyBatis的电商系统，包括前台商城系统及后台管理系统。

> 如果该项目对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！

> 或者您可以 "follow" 一下，该项目将持续更新，不断完善功能。

> 项目交流2000人QQ群：[419078373 473023475 203747031]

> 如有问题或者好的建议可以在 Issues 中提。


## 前言

`mall`项目致力于打造一个完整的电商系统，采用现阶段流行技术实现。

## 项目介绍

`mall`项目是一套电商系统，包括前台商城系统及后台管理系统，小程序，h5，基于SpringBoot+MyBatis实现。
前台商城系统包含首页门户、商品推荐、商品搜索、商品展示、购物车、订单流程、会员中心、客户服务、帮助中心等模块。
后台管理系统包含商品管理、订单管理、会员管理、促销管理、运营管理、内容管理、统计报表、财务管理、权限管理、代码生成设置等模块。

### 项目演示

> 后台管理系统


1. 小程序下载 地址 https://gitee.com/catshen/mall-applet
1. 后台管理下载地址 https://gitee.com/zscat/mall
1. 项目演示地址： [http://39.98.190.128/index.html](http://39.98.190.128/index.html)  

  
![后台管理系统功能演示.gif](/document/resource/mall-admin.gif)


1. 授权登录
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143415_b0ef0bba_134431.png "屏幕截图.png")
1. 首页
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143436_8e50f9d7_134431.png "屏幕截图.png")
1. 商品详情，并选择规格
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143541_d6e7e8cf_134431.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143704_9586f8aa_134431.png "屏幕截图.png")
1. 预下单，选择收货地址信息
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143730_d774a078_134431.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143823_95d747b3_134431.png "屏幕截图.png")
1. 个人信息
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143917_946e424d_134431.png "屏幕截图.png")
1. 订单列表
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/143943_84a3ef3a_134431.png "屏幕截图.png")
1. 订单详情
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144018_10dc9ec5_134431.png "屏幕截图.png")
1. 首页可领取的优惠券
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144053_e80b745d_134431.png "屏幕截图.png")
1. 所有优惠券
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144149_a66ebf7c_134431.png "屏幕截图.png")
1. 我领取的优惠券
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144234_f054cd86_134431.png "屏幕截图.png")
1. 商品分类
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144348_60404f86_134431.png "屏幕截图.png")

1. 商品搜索
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144420_5266b41d_134431.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144439_6471f3de_134431.png "屏幕截图.png")
1. 购物车
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144536_6d6e2401_134431.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/144907_98fc57b6_134431.png "屏幕截图.png")
1. 收藏商品和取消收藏
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/145002_2e903bb2_134431.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/145038_af4c29d2_134431.png "屏幕截图.png")
1. 我收藏的商品
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/145100_8ee15225_134431.png "屏幕截图.png")
1. 专题列表，专题详情 专题收藏 专题分享
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/145149_175dfb24_134431.png "屏幕截图.png")

### 组织结构

``` lua
mall
├── mall-mbg -- MyBatisGenerator生成的数据库操作代码
├── mall-admin -- 后台商城管理系统接口
├── mall-search -- 基于Elasticsearch的商品搜索系统
├── mall-portal -- 前台商城系统接口
└── mall-demo -- 框架搭建时的测试代码
├── 前端项目`mall-admin-web`  地址 请加群下载   320860169
├── h5前端项目`vue-js-master`地址 请加群下载  
├── pc前端项目`Mall-Vue-master`地址 请加群下载  
├── 小前端项目`wechatapp`地址 请加群下载
```

后台功能列表
<img src="https://images.gitee.com/uploads/images/2019/0519/170418_d276b6b4_134431.png"  />
小程序功能列表
<img src="https://images.gitee.com/uploads/images/2019/0519/170631_20a127ce_134431.png"  />


## 目前h5项目已实现功能
1. 首页数据的展示
2. 分类页数据的展示
3. 购物车
4. 我的
5. 注册
6. 登录
7. 商品详情页
8. 商品搜索
##h5项目效果图


![](https://images.gitee.com/uploads/images/2019/0217/112713_5f032a4c_134431.png)

![](https://images.gitee.com/uploads/images/2019/0217/112713_f4cb24ab_134431.png)

![](https://images.gitee.com/uploads/images/2019/0217/112713_a17c828d_134431.png)

![](https://images.gitee.com/uploads/images/2019/0217/112713_a7afcc52_134431.png)

![](https://images.gitee.com/uploads/images/2019/0217/112713_2d82d3c8_134431.png)

![](https://images.gitee.com/uploads/images/2019/0217/112714_62baf63a_134431.png)

![](https://images.gitee.com/uploads/images/2019/0217/112715_c571472d_134431.png)


## 目前小程序项目已实现功能
1. 首页数据的展示
2. 分类页数据的展示
3. 购物车
4. 我的
5. 注册
6. 登录
7. 商品详情页
8. 商品搜索
9.下单
10.用户详情


## 目前pc项目已实现功能
1. 首页数据的展示
2. 分类页数据的展示
3. 购物车
4. 我的
5. 注册
6. 登录
7. 商品详情页
8. 商品搜索
9.下单
10.用户详情
### 技术选型

#### 后端技术

技术 | 说明 | 官网
----|----|----
Spring Boot | 容器+MVC框架 | [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
Spring Security | 认证和授权框架 | [https://spring.io/projects/spring-security](https://spring.io/projects/spring-security)
MyBatis | ORM框架  | [http://www.mybatis.org/mybatis-3/zh/index.html](http://www.mybatis.org/mybatis-3/zh/index.html)
MyBatisGenerator | 数据层代码生成 | [http://www.mybatis.org/generator/index.html](http://www.mybatis.org/generator/index.html)
PageHelper | MyBatis物理分页插件 | [http://git.oschina.net/free/Mybatis_PageHelper](http://git.oschina.net/free/Mybatis_PageHelper)
Swagger-UI | 文档生产工具 | [https://github.com/swagger-api/swagger-ui](https://github.com/swagger-api/swagger-ui)
Hibernator-Validator | 验证框架 | [http://hibernate.org/validator/](http://hibernate.org/validator/)
Elasticsearch | 搜索引擎 | [https://github.com/elastic/elasticsearch](https://github.com/elastic/elasticsearch)
RabbitMq | 消息队列 | [https://www.rabbitmq.com/](https://www.rabbitmq.com/)
Redis | 分布式缓存 | [https://redis.io/](https://redis.io/)
MongoDb | NoSql数据库 | [https://www.mongodb.com/](https://www.mongodb.com/)
Docker | 应用容器引擎 | [https://www.docker.com/](https://www.docker.com/)
Druid | 数据库连接池 | [https://github.com/alibaba/druid](https://github.com/alibaba/druid)
OSS | 对象存储 | [https://github.com/aliyun/aliyun-oss-java-sdk](https://github.com/aliyun/aliyun-oss-java-sdk)
JWT | JWT登录支持 | [https://github.com/jwtk/jjwt](https://github.com/jwtk/jjwt)
LogStash | 日志收集 | [https://github.com/logstash/logstash-logback-encoder](https://github.com/logstash/logstash-logback-encoder)
Lombok | 简化对象封装工具 | [https://github.com/rzwitserloot/lombok](https://github.com/rzwitserloot/lombok)

#### 前端技术

技术 | 说明 | 官网
----|----|----
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)
Vuex | 全局状态管理框架 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
Element | 前端UI框架 | [https://element.eleme.io/](https://element.eleme.io/)
Axios | 前端HTTP框架 | [https://github.com/axios/axios](https://github.com/axios/axios)
v-charts | 基于Echarts的图表框架 | [https://v-charts.js.org/](https://v-charts.js.org/)
Js-cookie | cookie管理工具 | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)
nprogress | 进度条控件 | [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)

#### 架构图

##### 系统架构图

![系统架构图](document/resource/mall_system_arch.png)

##### 业务架构图

![系统架构图](document/resource/mall_business_arch.png)

#### 模块介绍

##### 后台管理系统 `mall-admin`

- 商品管理：[功能结构图-商品.jpg](document/resource/mind_product.jpg)
- 订单管理：[功能结构图-订单.jpg](document/resource/mind_order.jpg)
- 促销管理：[功能结构图-促销.jpg](document/resource/mind_sale.jpg)
- 内容管理：[功能结构图-内容.jpg](document/resource/mind_content.jpg)
- 用户管理：[功能结构图-用户.jpg](document/resource/mind_member.jpg)

##### 前台商城系统 `mall-portal`

[功能结构图-前台.jpg](document/resource/mind_portal.jpg)

#### 开发进度

![项目开发进度图](document/resource/mall_dev_flow.png)

## 环境搭建

### 开发工具

工具 | 说明 | 官网
----|----|----
IDEA | 开发IDE | https://www.jetbrains.com/idea/download
RedisDesktop | redis客户端连接工具 | https://redisdesktop.com/download
Robomongo | mongo客户端连接工具 | https://robomongo.org/download
SwitchHosts| 本地host管理 | https://oldj.github.io/SwitchHosts/
X-shell | Linux远程连接工具 | http://www.netsarang.com/download/software.html
Navicat | 数据库连接工具 | http://www.formysql.com/xiazai.html
PowerDesigner | 数据库设计工具 | http://powerdesigner.de/
Axure | 原型设计工具 | https://www.axure.com/
MindMaster | 思维导图设计工具 | http://www.edrawsoft.cn/mindmaster
ScreenToGif | gif录制工具 | https://www.screentogif.com/
ProcessOn | 流程图绘制工具 | https://www.processon.com/
PicPick | 屏幕取色工具 | https://picpick.app/zh/


