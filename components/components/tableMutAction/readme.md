## 基于iview的表格行内多操作组件
按钮或者input都是iview的组件，当然这些都可以改成原生的，只是要改标签，然后自定义事件了

页面上使用
```
  <tableMutAction @down="down" @up="up"  :headers="headers" :bodys="bodys"/>

```
数据格式

```
actions 都是操作行为，写法为iview的table的render函数
render函数返回参数
{
  title: '分类名称', key: '$', minWidth: 500,
  render: (h, {row, index}) => {
    <!-- 头部数据 -->
    let headers = {
        value: {
          ipt: row.name,
          id: row.id
        },
        actions: [  ]
    }
    let list = []
    row.children.map((item) => {
        list.push({value: item.name, id: item.id})
    })
    let bodys = {
      list,
      actions: []
    }
    return h('tableMutAction',
        {
          props: {
            setCollapse: true,
            headers,
            bodys,
          },
          on: {
            delete: (data) => {
              if (data.row.value.id != -1) {
                this.deleteCommit(data.row.value)
              }
            },
            headerInputBlur: (data) => {
              console.log(data);
              if (data.cur.id == -1) {
                this.addCommit({name: data.cur.ipt, type: 'parentAdd'})
              } else {
                this.addCommit({name: data.cur.ipt, id: data.cur.id, type: 'parentEdit'})
              }
            },
            inputBlur: (data) => {
              if (data.cur.id == -1) {
                this.addCommit({name: data.cur.value, id: data.all.header.id, type: 'childAdd'})
              } else {
                this.addCommit({name: data.cur.value, id: data.cur.id, type: 'childEdit'})
              }
            }
          }
      }
    )
  }
},
```

其他参数
```
addBtn:  添加按钮内容自定义的文本。
trim: 是否需要把input为空的值的数据去掉，默认去掉
move: 子级列表是否需要上下移动按钮，可以在组件上监听up或者down获取移动后的所有数据，up或者down事件返回值 all： 所有数据 row： 当前项数据 index：当前项下标
delete 子级列表项删除事件回调  all： 所有数据 row： 当前项数据 index：当前项下标
setCollapse: 初始化是否需要展开
inputBlur: input输入框失去焦点时触发事件， 返回值 curValue： 当前input的值, all：所有数据
```
