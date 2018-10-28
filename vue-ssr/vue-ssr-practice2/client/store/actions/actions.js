import model from '../../model/client-model'
import notify from '../../components/notification/function'
import bus from '../../util/bus'

const handleError = (err) => {
  // console.log(err)
  if (err.code === 401) {
    notify({
      content: '请登录'
    })
    // 使用新vue对象，事件总线，触发一个事件
    bus.$emit('auth')
  }
}
// 在actions可以处理数据的错误，请求失败等处理

export default {
  updateCountAxync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  addTodo ({commit}, todo) {
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: '你又多了一件事要做'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  deleteTodo ({commit}, id) {
    model.createTodo(id)
      .then(data => {
        commit('deleteTodo', id)
        notify({
          content: '你又少了一件事要做'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  deleteAllCompleted ({commit, state}) {
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.delteAllCompleted(ids)
      .then(data => {
        commit('delteAllCompleted')
        notify({
          content: '清理一下。。。 '
        })
      }).catch(err => {
        handleError(err)
      })
  },
  login ({commit}, { username, password }) {
    console.log(username)
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({content: '登录成功'})
          resolve()
        }).catch(err => {
          notify({
            content: '抱歉，登录失败，请确认用户名或者密码是否正确'
          })
          handleError(err)
          reject(err)
        })
    })
  }
}
