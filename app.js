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
  },
});

app.mount("#app");
