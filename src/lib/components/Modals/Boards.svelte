<script>
  import { boards, currentBoard } from "$lib/stores/tasks"
  import Modal from "$lib/components/Modals/Base.svelte"

  export let isOpen, setIsOpen

  // New board state
  let boardName

  function createBoard() {
    boards.update(data => ({
      ...data,
      [boardName]: []
    }))

    currentBoard.set(boardName)

    // Resetting values
    boardName = ""
    setIsOpen(false)
  }

  function removeCurrentBoard() {
    if (Object.keys($boards).length < 2) {
      setIsOpen(false)
      return alert("Can't delete the only remaining board!")
    }

    boards.update(data => {
      delete data[$currentBoard]

      return data
    })

    currentBoard.set(Object.keys($boards)[0])

    setIsOpen(false)
  }
</script>

<Modal {isOpen} {setIsOpen}>
  <h3>Create Board</h3>
  <p>
    Create a brand new board!
    Just fill in a unique and descriptive title
  </p>

  <form 
    class="input__container"
    on:submit|preventDefault={createBoard}
  >
    <input
      required
      bind:value={boardName} 
      placeholder="Enter a unique board name"
    />

    <button 
      class="btn bg-primary" 
      type="submit"
    >
      Create
    </button>
  </form>

  <h4>Delete Board</h4>
  <p>
    Delete your current board. This action will permattely
    remove the board and all of its inner tasks
  </p>

  <button
    class="btn bg-error fullwidth"
    on:click={removeCurrentBoard}
  >
    Delete "{$currentBoard}"
  </button>
</Modal>

<style>
  .input__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--color-body);
    border-radius: 5px;
  }

  p {
    margin-top: 0.8em;
    margin-bottom: 1.6em;
  }

  input {
    border-radius: 5px 0 0 5px;
  }

  .input__container button {
    border-radius: 0 5px 5px 0;
  }

  h4 {
    margin-top: 2em;
  }
</style>
