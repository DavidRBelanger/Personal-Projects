window.addEventListener('load', () => { // Starts on load
  // Retrieve data from local storage
  const storedData = localStorage.getItem("toDoAppList");
  let list = [];
  
  // Check if there is stored data, and parse it if available
  if (storedData) {
      list = JSON.parse(storedData);
  }

  // Get elements by their IDs
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  // Function to add a new entry based on task value
  function addTaskToList(task) {
      // Create a new div for the new element
      const task_el = document.createElement('div');
      task_el.classList.add('task');

      // Create a new div for the content of the element
      const task_content_el = document.createElement('div');
      task_content_el.classList.add('content');

      // Add the div to the content
      task_el.appendChild(task_content_el);

      // Create an input element, read-only so it cannot be edited
      const task_input_el = document.createElement('input');
      task_input_el.classList.add('text');
      task_input_el.type = 'text';
      task_input_el.value = task;
      task_input_el.setAttribute('readonly', 'readonly');

      // Place the element within the content div
      task_content_el.appendChild(task_input_el);

      // Create a div for the task's actions
      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');

      // Create buttons
      const task_edit_el = document.createElement('button');
      task_edit_el.classList.add('edit');
      task_edit_el.innerText = 'Edit';
      const task_delete_el = document.createElement('button');
      task_delete_el.classList.add('delete');
      task_delete_el.innerText = 'Delete';

      // Add action buttons to the div section
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el);
      list_el.appendChild(task_el);

      // Edit button event listener
      task_edit_el.addEventListener('click', (e) => {
          if (task_edit_el.innerText.toLowerCase() == "edit") {
              task_edit_el.innerText = "Save";
              task_input_el.removeAttribute("readonly");
              task_input_el.focus();
          } else {
              task_edit_el.innerText = "Edit";
              task_input_el.setAttribute("readonly", "readonly");

              // Get the updated task value
              const updatedTask = task_input_el.value;

              // Update the task in the list
              const index = list.indexOf(task);
              if (index !== -1) {
                  list[index] = updatedTask;
                  const str = JSON.stringify(list);

                  // Update local storage with the updated list
                  localStorage.setItem("toDoAppList", str);
              }
          }
      });

      // Remove button event listener
      task_delete_el.addEventListener('click', (e) => {
          list_el.removeChild(task_el);

          // Remove the task from the list and update local storage
          const index = list.indexOf(task);
          if (index !== -1) {
              list.splice(index, 1);
              const str = JSON.stringify(list);
              localStorage.setItem("toDoAppList", str);
          }
      });
  }

  // Iterate through the stored data and add new entries
  list.forEach((task) => {
      addTaskToList(task);
  });

  // Submit event listener
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Takes in task value
      const task = input.value;

      // Save it to local storage
      list.push(task);
      const str = JSON.stringify(list);
      localStorage.setItem("toDoAppList", str);

      // Add a new entry to the list
      addTaskToList(task);

      input.value = '';
  });
});