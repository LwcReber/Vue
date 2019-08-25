# hightcom

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 高级组件写法

1. 通过API调用的方式

如果仍然保留在template中写组件的方式，可以另起一个扩展组件来使用api的方式，原来的方式的继续保留

本例中func-message.js就是扩展的组件，在api调用的时候传的一些参数或者使用不同的功能可以直接在扩展组件里面重新定义。

在function.js中通过引入Vue，然后写一个方法，方法里面就是再使用`Vue.extend(component)`的方式，获得一个vue的构造函数，然后new一个实例出来，再挂载到body中

再通过`Vue.prototype.$xxx`的方式把在function中的方法注册为全局的方法即可




