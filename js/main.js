document.addEventListener('DOMContentLoaded', function () {
    const taskListContainer = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskModal = document.getElementById('task-modal');
    const taskForm = document.getElementById('task-form');
    const cancelBtn = document.getElementById('cancel-btn');
  
    let tasks = [];
  
    // Event listener para abrir el modal
    addTaskButton.addEventListener('click', () => {
      taskForm.reset();
      taskModal.style.display = 'block';
    });
  
    // Event listener para cerrar el modal
    cancelBtn.addEventListener('click', () => {
      taskModal.style.display = 'none';
    });
  
    // Event listener para enviar el formulario
    taskForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const dueDate = document.getElementById('due-date').value;
  
      // Validación simple de campos
      if (title && description && dueDate) {
        const task = { title, description, dueDate };
        tasks.push(task);
        updateTaskList();
        taskModal.style.display = 'none';
      } else {
        alert('Por favor, complete todos los campos.');
      }
    });
  
    // Función para actualizar la lista de tareas en el DOM
    function updateTaskList() {
      taskListContainer.innerHTML = '';
      tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
          <div>
            <strong>${task.title}</strong>
            <p>${task.description}</p>
            <p>Fecha de Vencimiento: ${task.dueDate}</p>
          </div>
          <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskListContainer.appendChild(taskItem);
      });
    }
  
    // Función para eliminar una tarea
    window.deleteTask = function (index) {
      tasks.splice(index, 1);
      updateTaskList();
    };
  });
  