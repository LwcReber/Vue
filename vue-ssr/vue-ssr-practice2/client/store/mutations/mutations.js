export default {
  updateCount (state, { num, num2 }) {
    console.log(num2)
    state.count = num
  },
  fillTodos (state, todos) {
    try {
      state.todos = todos
    } catch (error) {
      console.log(error)
    }
  }
}
