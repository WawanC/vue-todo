const app = Vue.createApp({
  data() {
    return {
      enteredTodoValue: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.enteredTodoValue.trim().length === 0) {
        return;
      }
      this.todos.push(this.enteredTodoValue.trim());
      this.enteredTodoValue = "";
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    },
  },
});

app.mount("#app");
