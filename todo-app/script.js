document.addEventListener("DOMContentLoaded",() => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");
    const buttonEmpty = document.getElementById("button-empty");

    editElement = null;
    editMode = false;

    buttonEmpty.addEventListener("click",() => {
        const confirmation = window.confirm("Are you sure you want to delete all todos?");
        if(confirmation){
            ulTodo.innerHTML = "";
            localStorage.removeItem("allTodos")
        }
    });
    

    buttonTodo.addEventListener("click",() => {
        const text = inputTodo.value;

        if(editMode){
            editElement.querySelector(".text-todo").textContent = text;
            editMode=false;
            editElement = null;
            buttonTodo.textContent = "Add";
        }
        else{
            createTodo(text);
        }
        inputTodo.value = "";
        saveAllTodo();
    });

    const createTodo = (task) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex w-100 justify-content-between";
        li.innerHTML = `<span class="text-todo">${task}</span>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger">Edit</button>
            <button type="button" class="btn btn-warning">Delete</button>
        </div>`;
        ulTodo.appendChild(li);  
    };

    ulTodo.addEventListener('click', (e) => {
        if(e.target.classList.contains("btn-warning")){
            e.target.closest(".list-group-item").remove()
            saveAllTodo();
        }

        if (e.target.classList.contains("btn-danger")){
            const li = e.target.closest(".list-group-item")
            const taskText = li.querySelector(".text-todo").textContent

            const input = document.createElement("input");
            input.value = taskText;
            li.querySelector(".text-todo").replaceWith(input);

            input.focus()

            input.addEventListener("blur",() => {
                const updatedText = input.value;
                const span = document.createElement("span");
                span.className = "text-todo";
                span.textContent = updatedText;

                li.replaceChild(span, input); 

                saveAllTodo();
            })
        }
    })

    const saveAllTodo = () => {
        const allTodos = [...document.querySelectorAll(".text-todo")].map((task) => task.textContent);
        console.log(allTodos);

        localStorage.setItem("allTodos",JSON.stringify(allTodos));
    }

    const loadAllTodo = () => {
        const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
        allTodos.forEach(element => {
            createTodo(element);
        });
    };
    loadAllTodo();

    
}); 