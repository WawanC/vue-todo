const app = Vue.createApp({
  data() {
    return {
      enteredTodoValue: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.enteredTodoValue);
      this.enteredTodoValue = "";
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    },
  },
});

app.mount("#app");
