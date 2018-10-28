import model from '../../model/client-model'

const handleError = () => {
  // console.log(err)
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
  }
}
