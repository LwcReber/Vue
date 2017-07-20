var app = new　Vue({
  el: '#app',
  data: {
    message: 'hello Vue'
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})

// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<li>{{todo.text}}</li>'
// })
//
// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     groceryList: [
//       {id: 0, text: '蔬菜'},
//       {id: 1, text: '奶酪'},
//       {id: 2, text: '随便'},
//     ]
//   }
// })

// 缩写
var acronym = new Vue({
  el: '#acronym',
  data: {
    url: 'https://www.baidu.com/'
  },
  methods: {
    goto: function() {
      console.log('点击我了');
    }
  }
})

var computed = new Vue({
  el: '#computed',
  data: {
    message: 'hello'
  },
  computed: {
    reverse: function() {
      return this.message.split('').reverse().join('')
    }
  }
})
var classEx = new Vue({
  el: '#classEx',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      }
    }
  }
})

Vue.component('todo-item', {
  template: '\
  <li>\
    {{title}}\
    <button v-on:click="$emit(\'remove\')">X</button>\
  </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      'Do the dishes',
      'Take out the trash',
      'Mow the lawn'
    ]
  },
  methods: {
    addNewTodo: function() {
      this.todos.push(this.newTodoText);
      this.newTodoText = '';
    }
  }
})
