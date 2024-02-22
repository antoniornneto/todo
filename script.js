let todoInput = document.querySelector(".todo_input");
const form = document.querySelector("form");
let todoList = document.querySelector(".todo_list");
let todoCount = document.querySelectorAll(".todo_count");
const clearBtn = document.querySelectorAll(".todo_clear");
const removeBtn = document.querySelectorAll(".remove");
const all = document.querySelector("input#all");
const active = document.querySelector("input#active");
const completed = document.querySelector("input#completed");
const label = document.querySelectorAll(".filter_container>.filter>label");
const labelMobile = document.querySelectorAll(".filter_mobile>.filter>label");
const themeBtn = document.querySelector(".icon_theme");

// mobile filter elements

const todo = document.querySelector("#todo label");

let arrayTodo = [];

function removeTodo(element) {
  element.remove();
  if (todoList.childElementCount === 1 || todoList.childElementCount === 0) {
    todoCount.forEach((todo) => {
      todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
    });
  } else {
    todoCount.forEach((todo) => {
      todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
    });
  }
}

function createTodo() {
  let todoTxt = todoInput.value;
  let todo = document.createElement("li");
  todo.classList.add("todo");
  todo.innerHTML = `
    <label>
    <input class="todoCheck" type="checkbox" name="" id="">
    <span class="checkmark"></span>
    <p class="todo_txt">${todoTxt}</p>
    </label>
    <span class="remove"></span>
    `;
  todoList.appendChild(todo);
  todoInput.value = "";
  if (todoList.childElementCount === 1 || todoList.childElementCount === 0) {
    todoCount.forEach((todo) => {
      todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
    });
  } else {
    todoCount.forEach((todo) => {
      todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
    });
  }

  clearBtn[0].addEventListener("click", () => {
    let check = document.querySelectorAll(".todoCheck");
    check.forEach((todoCheck) => {
      todoCheck.checked == true
        ? todoCheck.parentElement.parentElement.remove()
        : "";
    });
    if (todoList.childElementCount === 1 || todoList.childElementCount === 0) {
      todoCount.forEach((todo) => {
        todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
      });
    } else {
      todoCount.forEach((todo) => {
        todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
      });
    }
  });

  clearBtn[1].addEventListener("click", () => {
    let check = document.querySelectorAll(".todoCheck");
    check.forEach((todoCheck) => {
      todoCheck.checked == true
        ? todoCheck.parentElement.parentElement.remove()
        : "";
    });
    if (todoList.childElementCount === 1 || todoList.childElementCount === 0) {
      todoCount.forEach((todo) => {
        todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
      });
    } else {
      todoCount.forEach((todo) => {
        todo.innerHTML = `<span>${todoList.childElementCount}</span> item left`;
      });
    }
  });

  return (arrayTodo = document.querySelectorAll('input[type="checkbox"]'));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (todoInput.value.length !== 0) {
    createTodo();
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.value === "remove") {
    removeTodo(e.target.parentElement);
  }
});

all.addEventListener("change", () => {
  label[0].classList.add("checked");
  label[1].classList.remove("checked");
  label[2].classList.remove("checked");

  labelMobile[0].classList.add("checked");
  labelMobile[1].classList.remove("checked");
  labelMobile[2].classList.remove("checked");

  arrayTodo.forEach((todo) => {
    todo.checked == true || todo.checked == false
      ? todo.parentElement.parentElement.classList.remove("hidden")
      : todo.parentElement.parentElement.classList.add("hidden");
  });
});

active.addEventListener("change", () => {
  label[0].classList.remove("checked");
  label[1].classList.add("checked");
  label[2].classList.remove("checked");

  labelMobile[0].classList.remove("checked");
  labelMobile[1].classList.add("checked");
  labelMobile[2].classList.remove("checked");
  arrayTodo.forEach((todo) => {
    todo.checked == true
      ? todo.parentElement.parentElement.classList.add("hidden")
      : todo.parentElement.parentElement.classList.remove("hidden");
  });
});

completed.addEventListener("change", () => {
  label[0].classList.remove("checked");
  label[1].classList.remove("checked");
  label[2].classList.add("checked");

  labelMobile[0].classList.remove("checked");
  labelMobile[1].classList.remove("checked");
  labelMobile[2].classList.add("checked");

  arrayTodo.forEach((todo) => {
    todo.checked == true
      ? todo.parentElement.parentElement.classList.remove("hidden")
      : todo.parentElement.parentElement.classList.add("hidden");
  });
});

themeBtn.addEventListener("click", () => {
  let theme = document.body.classList.contains("dark_theme");

  if (theme == true) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
  }
});
