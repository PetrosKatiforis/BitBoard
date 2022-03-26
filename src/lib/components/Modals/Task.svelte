<script>
  import { boards, currentBoard } from "$lib/stores/tasks"
  import Modal from "$lib/components/Modals/Base.svelte"

  export let isOpen, setIsOpen

  let title, details

  function createTask() {
    // Some really simple validation
    if ($boards[$currentBoard].some(item => item.title == title)) {
      alert("An item with that title already exists!")
      return
    }

    // Appending task
    boards.update(data => ({
      ...data,
      [$currentBoard]: [
        ...$boards[$currentBoard],
        { title, details }
      ]
    }))

    title = details = ""
    setIsOpen(false)
  }
</script>

<Modal {isOpen} {setIsOpen}>
  <h3>Create new task</h3>
  <p>
    Upload a new task. Enter a short title and some
    useful details about your goal
  </p>

  <form on:submit|preventDefault={createTask}>
    <input
      required
      bind:value={title}
      placeholder="Enter a short title"
    />

    <textarea
      required
      bind:value={details}
      placeholder="Describe your ultimate goal with details"
    />

    <button type="submit" class="btn bg-primary fullwidth">
      Create your new task 
    </button>
  </form>
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
</style>
