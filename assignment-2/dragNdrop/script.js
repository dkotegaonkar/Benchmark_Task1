const list = document.getElementById("sortableList");
let draggedItem = null;

list.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    event.target.classList.add("dragging");
});

list.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");
    draggedItem = null;
});

list.addEventListener("dragover", (event) => {
    event.preventDefault();
    const afterElement = getDragAfterElement(list, event.clientY);
    if (afterElement == null) {
        list.appendChild(draggedItem);
    } else {
        list.insertBefore(draggedItem, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll("li:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}