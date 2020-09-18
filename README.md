<!--
 * @Author: jing.chen
 * @Date: 2020-08-28 15:31:09
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 16:15:44
 * @Description: 
-->
# icrm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
// npm run serve // 无后端服务版本 后续开发中已经抛弃
// 先查自己ip 或者干脆写localhost
npm run open 192.168.10.220:3000 // 192.168.10.220:3000是本地ip 也可以自行写localhost，3000端口是node服务端的启动端口
```
+ 若选择有后端服务版本。需要拉取node代码
+ 需要先启动node后台
+ 后台node项目地址：  [iCrmNodeServer](https://github.com/chenjing0823/iCrmNode)
+ 后台特别简单写了点mock接口，随拉随用。拉取后台项目进入src目录下 node server.js即可
***
### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
