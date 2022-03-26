<script>
  import TaskModal from "$lib/components/Modals/Task.svelte"
  import MdAdd from "svelte-icons/md/MdAdd.svelte"

  // Modal state
  let isOpen = false

  function setIsOpen(value) {
    isOpen = value
  }
</script>

<div class="new-task">
  <div
    class="new-task__content"
    on:click={() => setIsOpen(true)}
  >
    <MdAdd />

    <p>Create New Task</p>
  </div>
</div>

<TaskModal {isOpen} {setIsOpen} />

<style>
  .new-task {
    width: 240px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-gray);
    border-radius: 5px;
    cursor: pointer;
    padding: 1em;
  }

  div :global(svg) {
    width: 30px;
    margin-bottom: 0.5em;
  }

  .new-task__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 0.9rem;
  }

  @media (max-width: 650px) {
    .new-task {
      width: 300px;
    }
  }
</style>
