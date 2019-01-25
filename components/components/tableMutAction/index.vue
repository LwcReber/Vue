<template lang="html">
  <div class="tableMutAction">
    <div>
      <Button type="primary" :icon="collapse ? 'minus-round' : 'plus-round'" @click="changeCollapse">
        {{addBtn || ''}}
      </Button>
      <Input @on-input-change="headerInputBlur(header.value.ipt)" v-model.trim="header.value.ipt" placeholder="请输入" style="width: 200px"></Input>
      <div class="actions">
        <Expand v-for="(action, index) in header.actions" :key="index" :all="all" :row="expandRow(header.value)" :render="action.render" :index="index"></Expand>
      </div>
    </div>

    <!-- 子项 -->
    <div class="children showChild" ref="children" v-show="collapse">
      <div class="child" v-for="(item, index) in body.list" :key="index" v-if="body.list.length > 0">
        <div class="" >
          <Input v-model.trim="item.value" @on-input-change="inputBlur(item.value)" placeholder="请输入" style="width: 200px"></Input>
          <div class="actions">
            <Expand v-for="(action, acIndex) in bodyActions" :key="index" :all="all" :row="expandRow(item)" :render="action.render" :index="index"></Expand>
          </div>
        </div>
      </div>
      <div class="child">
        <Button type="primary" @click="addChild" icon="plus-round">{{addBtn}}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Expand from './expand.js';

export default {
  name: 'tableMutAction',
  components: {Expand},
  props: {
    addBtn: String, // 添加按钮自定义显示文本
    headers: Object,
    bodys: Object,
    // body 列表是否需要上下移动
    move: {
      type: Boolean,
      default: false
    },
    // 是否需要处理input为空的情况，默认把input为空的数据去掉
    trim: {
      type: Boolean,
      default: true
    },
    setCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
        collapse: this.setCollapse,
        header: Object.assign({
          addBtn: '',
          value: {ipt: ''},
          actions: []
        }, this.headers),
        body:  Object.assign({
          list: [],
          actions: []
        },this.bodys),
        update: true,
    }
  },
  computed: {
    all () {
      let header = this.header.value
      let bodyList = this.body.list
      if (this.trim) {
        // 头部标题为空时，子列表数据清空
        if (header == '') {
          bodyList = []
        } else {
          let newList = []
          bodyList.map((item) => {
            if (item.value.trim()) {
              newList.push(item)
            }
          })
          bodyList = newList
        }
      }
      return {
        header,
        bodyList
      }
    },
    bodyActions () {
      let moveAction = []
      if (this.move) {
        moveAction = [
          {
            render: (h, params) => {
              return h('Button', {
                style: {
                  marginLeft: '5px',
                  marginRight: '5px'
                },
                props: {
                  type: 'primary',
                },
                on: {
                  click: () => {
                    this.up(this.body.list, params.index)
                    this.$nextTick(() => {
                      this.$emit('up', {all: this.all, row: params.row, index: params.index})
                    })
                  }
                },
              }, '上移')
            }
          },
          {
            render: (h, params) => {
              return h('Button', {
                style: {
                  marginRight: '5px'
                },
                props: {
                  type: 'primary',
                },
                on: {
                  click: () => {
                      this.down(this.body.list, params.index)
                      this.$nextTick(() => {
                        this.$emit('down', {all: this.all, row: params.row, index: params.index})
                    })
                  }
                },
              }, '下移')
            }
          }
        ]
      }
      return [
        ...this.body.actions,
        ...moveAction,
        {
          render: (h, params) => {
            return h('Button', {
              on: {
                click: () => {
                  this.body.list.splice(params.index, 1)
                  this.$emit('delete', {all: this.all, row: params.row, index: params.index})
                }
              },
              props: {
                type: 'error',
              },
            }, '删除')
          }
        }
      ]
    }
  },
  methods: {
    expandRow (value) {
      return { value }
    },
    changeCollapse () {
      this.collapse = !this.collapse
    },
    addChild () {
      // 如果是新增的父级的类型，不允许新增子列表
      if (this.header.value.id == -1) return
      this.body.list.push({
        value: '', id: -1
      })
    },
    // 上下移动
    moveArr(arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    },
    // 上移
    up (arr, $index) {
      if ($index == 0) {
        return arr;
      }
      this.moveArr(arr, $index, $index - 1) || [];
    },
    // 下移
    down (arr, $index) {
      if ($index == arr.length - 1) {
        return arr;
      }
      this.moveArr(arr, $index, $index + 1) || [];
    },
    headerInputBlur (value) {
      // 输入不为空时返回当前输入值以及所有数据给父元素
      this.valueCheck(value, () =>{
        this.$emit('headerInputBlur', {cur: this.header.value, all: this.all})
      })
    },
    inputBlur (value) {
      // 输入不为空时返回当前输入值以及所有数据给父元素
      this.valueCheck(value, () =>{
        const cur = this.body.list.find((item) => item.value == value)
        this.$emit('inputBlur', {cur, all: this.all})
      })
    },
    valueCheck (value, cb) {
      if (value) {
          cb & cb()
      }
    },
  },
  beforeDestroy () {
    this.body.actions = []
  }
}
</script>

<style lang="css" scoped>
  .tableMutAction {
    margin: 10px
  }
  .actions {
    display: inline-block;
  }
  .expand {
    margin-right: 10px
  }
  .children {
    position: relative;
    padding-top: 10px;
    margin-left: 60px;
    overflow-y: hidden;
  }
  .showChild {
    transition: height 0.5s;
  }
  .children:after {
    position: absolute;
    left: 0;
    top: -20px;
    height: 100%;
    width: 0;
    content: '';
    border-left: 1px solid #ddd;
  }
  .child {
    margin: 10px;
    margin-left: 20px;
  }
  .child-action {
    margin: 10px 0;
  }
</style>
