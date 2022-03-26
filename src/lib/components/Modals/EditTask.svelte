<script>
  import { boards, currentBoard } from "$lib/stores/tasks"
  import Modal from "$lib/components/Modals/Base.svelte"

  export let isOpen, setIsOpen
  export let task

  let { title, details } = task

  function updateTask() {
    // Validating user input
    if (!title || !details) {
      alert("Please fill out the information...")
      return
    }

    if (title !== task.title && 
        $boards[$currentBoard].some(item => item.title == title)) {
        
      alert("An item with that title already exists!")
      return
    }

    // Updating task
    boards.update(data => ({
      ...data,
      [$currentBoard]: [
        { title, details },
        ...$boards[$currentBoard].filter(item => item.title !== task.title)
      ]
    }))

    setIsOpen(false)
  }

  // Deletting the task
  function deleteTask() {
    let newTasks = $boards[$currentBoard]
      .filter(item => item.title !== task.title)

    boards.update(data => ({
      ...data,
      [$currentBoard]: newTasks
    }))

    setIsOpen(false)
  }
</script>

<Modal {isOpen} {setIsOpen}>
  <h3>Update current task</h3>
  <p>
    Update the selected task. Enter a short title and some
    useful details about your goal
  </p>

  <input
    bind:value={title}
    placeholder="Enter a short title"
  />

  <textarea
    bind:value={details}
    placeholder="Describe your ultimate goal with details"
  />

  <div class="button-group">
    <button class="btn bg-primary fullwidth" on:click={updateTask}>
      Update task
    </button>
    
    <button class="btn bg-error fullwidth" on:click={deleteTask}>
      Delete Task
    </button>
  </div>
</Modal>

<style>
  p {
    margin-top: 1em;
    margin-bottom: 2em;
  }

  textarea {
    margin-top: 0.5em;
    margin-bottom: 1em;

    height: 120px;
  }

  .button-group {
    display: flex;
    gap: 0.4em;
  }
</style>
